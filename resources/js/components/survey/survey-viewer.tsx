import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import { useDeepCompareEffect, useList } from 'react-use';
import { CompletingEvent, Model, ValueChangedEvent } from 'survey-core';
import 'survey-core/survey-core.min.css';
import { Survey } from 'survey-react-ui';
import { loadThemes, useSurveyThemes } from './survey-themes';
import { Spinner } from '../ui/spinner';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { cn, useListStorage } from '@/lib/utils';
import { Button } from '../ui/button';

loadThemes();

export interface SurveyComponentProps {
  json: object;
  values?: object;
  lazyload?: LazyLoadConfig[];
  onChange?(sender: Model, options: ValueChangedEvent): void;
  onCompleting?(sender: Model, options: CompletingEvent): void;
}


const useProgressLoader = () => {
  const [open, setOpen] = useState(false)
  const [complete, setComplete] = useState(false)
  const [task, setTask] = useList<{
    key: string | number,
    title?: string
    loading?: boolean,
    err?: string
  }>()

  const count = task?.length
  const taskDone = count && task.filter((v) => !v.loading).length == task.length

  useEffect(() => {
    if (taskDone) {
      const t = setTimeout(() => setComplete(true), 1000)
      return () => {
        clearTimeout(t)
      }
    }
  }, [task])

  console.log({ task });


  const loadingComponent = task?.length ?
    <Dialog open={open}
      onOpenChange={(isOpened) => {
        if (complete) setOpen(isOpened)
      }} >
      <DialogContent  >
        <DialogHeader>
          <DialogTitle>{"Sending data"}</DialogTitle>
          <div className='flex-col gap-0 pt-1.5 '>
            {task.map(({ title, loading, err }, i) => {
              return <div key={i} className={cn('flex pt-1', err ? "text-red-500" : loading ?
                "text-yellow-400" : "text-green-600")}>
                <h3 className={cn('flex-auto text-sm ', loading ? 'italic' : "font-medium")}>
                  {loading ? title + "..." : title}
                </h3>
                <div className='font-light text-xs p-0.5 '>{loading ?
                  <Spinner /> : err ? "FAIL" : "DONE"
                }</div>
              </div>
            })}
          </div>

          {complete && <Button className='mt-5 self-baseline' type='button' variant="outline" size="sm"
            onClick={() => setOpen(false)}
          >Finish</Button>}
        </DialogHeader>
      </DialogContent>
    </Dialog >
    : null

  const pushTask = useCallback((title: string) => {
    const key = Math.random()
    setTask.push({ key, title, loading: true })
    setOpen(true)
    return {
      finish(err?: string) {
        setTask.set(task =>
          task.map(v => v.key == key ? { ...v, loading: false, err } : v)
        )
      }
    }
  }, [setTask.push, setTask.set, setOpen])

  return {
    pushTask,
    setComplete,
    loadingComponent
  }
}

export function SurveyViewer(props: SurveyComponentProps) {
  const s = useSurveyViewer(props);
  return s.form
}

export function useSurveyViewer({
  json,
  lazyload,
  onChange,
}: SurveyComponentProps) {
  const [survey, setSurvey] = useState<Model>();
  const { theme } = useSurveyThemes();
  const { auth } = usePage<SharedData>().props;
  const { loadingComponent, pushTask, setComplete } = useProgressLoader()

  const { read, append } = useListStorage<{
    id: number,
    data: any
  }>("survey-unsent")

  // console.log({ auth }, formatDateTime(new Date()));

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
          location.reload();
        }, 6000);
      });

      model.onCompleting.add(async (sender, options) => {
        const taskResult = pushTask("Sending survey result:")
        // localStorage.setItem("")
        // localStorage.getItem("unsent")

        const id = Math.random()
        append({ id, data: sender.data })

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
                  const taskImages = pushTask(` - Upload: ${i} (${j + 1})`)

                  try {
                    // const img = (await uploadImage(val.content)) as any;
                    const img: any = {};
                    await delay(1000)

                    if (img) {
                      files.push(`${location.origin}/api/files/${img.name}`);
                    }
                    taskImages.finish()
                  } catch (err) {
                    taskImages.finish("Gagal upload file")
                    // console.error('image upload failed', err);
                    // throw err;
                  }

                }
              }



              if (files?.length) {
                data[i] = files;
              }
            }
          }


          const taskStoreDB = pushTask(" - Store to database")
          // const saved = await postSurveyResponse({
          //   surveyor_name: auth.user.name,
          //   surveyor_email: auth.user.email,
          //   survey_date: formatDateTime(new Date()),
          //   ...data,
          // });
          await delay(1000)


          taskStoreDB.finish()
          taskResult.finish()
          

        } catch (err) {
          taskResult.finish("Failed to send data")
          // console.error('onCompleting error', err);
          // throw err;
        }

        setComplete(true)
      });

      //   model.data = {
      //     'nps-score': 9,
      //     'promoter-features': ['performance', 'ui'],
      //   };

      setSurvey(model);
    }
  }, [json]);


  return {
    model: survey,
    form: survey ?
      <>
        {loadingComponent}
        <Survey model={survey} />
      </>
      : null,
  };
}

// Lazy Load Item

type LazyLoadConfig = {
  name: string;
  onChoice(keyword: string): { value: any; text?: string }[];
};

function formatDateTime(date = new Date()) {
  const pad = (n: any) => String(n).padStart(2, '0');

  return [
    date.getFullYear(),
    '-',
    pad(date.getMonth() + 1),
    '-',
    pad(date.getDate()),
    ' ',
    pad(date.getHours()),
    ':',
    pad(date.getMinutes()),
    ':',
    pad(date.getSeconds()),
  ].join('');
}

formatDateTime();

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
