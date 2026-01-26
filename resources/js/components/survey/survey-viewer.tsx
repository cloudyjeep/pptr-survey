import { useState } from 'react';
import { useDeepCompareEffect } from 'react-use';
import { CompletingEvent, Model, ValueChangedEvent } from 'survey-core';
import 'survey-core/survey-core.min.css';
import { Survey } from 'survey-react-ui';
import { loadThemes, useSurveyThemes } from './survey-themes';

loadThemes();

export interface SurveyComponentProps {
  json: object;
  values?: object;
  lazyload?: LazyLoadConfig[];
  onChange?(sender: Model, options: ValueChangedEvent): void;
  onCompleting?(sender: Model, options: CompletingEvent): void;
}

export function SurveyViewer({
  json,
  values,
  lazyload,
  onChange,
}: SurveyComponentProps) {
  const [survey, setSurvey] = useState<Model>();
  const { theme } = useSurveyThemes();
  // const { auth } = usePage<SharedData>().props;

  useDeepCompareEffect(() => {
    if (json && typeof json == 'object') {
      const model = new Model(json);

      if (lazyload?.length) {
        checkLazyLoad(model, lazyload);
      }

      if (onChange) {
        model.onValueChanged.add(onChange);
      }

      model.applyTheme(theme);
      model.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
      });

      model.onComplete.add(async (sender, options) => {
        setTimeout(() => {
          // location.reload();
        }, 6000);
      });

      model.onCompleting.add(async (sender, options) => {
        try {
          console.log('sender:', sender);
          console.log('options:', options);
          console.log('data:', sender.data);

          const data: any = sender.data;

          for (const i in data) {
            const item = data[i];

            if (Array.isArray(item)) {
              const files = [];

              for (let j = 0; j < item.length; j++) {
                const val = item[j];
                console.log(['check', val]);

                if (
                  val &&
                  (val.type === 'image/png' || val.type?.startsWith('image/'))
                ) {
                  try {
                    const img = (await uploadImage(val.content)) as any;
                    if (img) {
                      files.push(`${location.origin}/api/files/${img.name}`);
                      // data[i][j] = `${data[i][j]?.type}; ${url}`;
                      // data[i][j] = `${location.origin}/api/files/${img.name} `;

                      // data[i][j] = {
                      //   ...data[i][j],
                      //   name: img.name,
                      //   content: undefined,
                      // };
                    }
                  } catch (err) {
                    console.error('image upload failed', err);
                    throw err;
                  }
                }
              }

              if (files?.length) {
                data[i] = files;
              }
            }
          }

          const saved = await postSurveyResponse(data);
          // console.log('survey saved', saved);
          // console.log({ auth });
        } catch (err) {
          // console.error('onCompleting error', err);
          throw err;
        }
      });

      //   model.data = {
      //     'nps-score': 9,
      //     'promoter-features': ['performance', 'ui'],
      //   };

      setSurvey(model);
    }
  }, [json]);

  if (survey) {
    return <Survey model={survey} />;
  }

  return null;
}

// Lazy Load Item

type LazyLoadConfig = {
  name: string;
  onChoice(keyword: string): { value: any; text?: string }[];
};

export function lazyLoadChoice(
  name: string,
  onChoice: LazyLoadConfig['onChoice'],
): LazyLoadConfig {
  return { name, onChoice };
}

function checkLazyLoad(model: Model, lazyLoad: LazyLoadConfig[]) {
  if (!lazyLoad?.length) return;

  model.onChoicesLazyLoad.add((sender, options) => {
    const keyword = String(options.filter || '').toLocaleLowerCase();

    for (let i = 0; i < lazyLoad.length; i++) {
      const item = lazyLoad[i];
      if (item.name == options.question.name) {
        const data = item.onChoice(keyword);
        options.setItems(data, data.length);
      }
    }
  });

  for (let i = 0; i < lazyLoad.length; i++) {
    const q = model.getQuestionByName(lazyLoad[i].name);
    if (q) {
      q.choicesLazyLoadEnabled = true;
      q.searchEnabled = true;
    }
  }
}

// helper

async function delay(duration: number = 2000) {
  await new Promise((r) => setTimeout(r, duration));
}

async function uploadImage(base64image: string): Promise<object> {
  // convert base64 (or data URL) to Blob and POST to backend
  try {
    let b64 = base64image || '';
    let mime = 'image/png';

    if (b64.startsWith('data:')) {
      const match = b64.match(/^data:(.*?);base64,(.*)$/);
      if (match) {
        mime = match[1];
        b64 = match[2];
      }
    }

    const binary = atob(b64);
    const len = binary.length;
    const array = new Uint8Array(len);
    for (let i = 0; i < len; i++) array[i] = binary.charCodeAt(i);

    const blob = new Blob([array], { type: mime });
    const filename = `survey_image_${Date.now()}.png`;

    const form = new FormData();
    form.append('image', new File([blob], filename, { type: mime }));

    return requestPost('/api/upload-image', form);
  } catch (err) {
    console.error('uploadImage error', err);
    throw err;
  }
}

async function postSurveyResponse(surveyRespon: any) {
  try {
    return requestPost(
      '/api/survey-responses',
      JSON.stringify({ survey_response: surveyRespon }),
    );
  } catch (err) {
    console.error('postSurveyResponse error', err);
    throw err;
  }
}

async function requestPost(url: string, data: any, headers?: object) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      // @ts-ignore
      'X-CSRF-TOKEN': window['csrfToken'],
    },
    // @ts-ignore
    body: data,
  });

  return response.json();
}
