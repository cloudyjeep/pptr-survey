import { debounce } from '@/lib/utils';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { useLocalStorage } from 'react-use';
import 'survey-core/survey-core.css';
import 'survey-core/survey.i18n';
import 'survey-creator-core/survey-creator-core.css';
import 'survey-creator-core/survey-creator-core.i18n';

import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react';
import { loadThemes, useSurveyThemes } from './survey-themes';
import { SurveyComponentProps } from './survey-viewer';

loadThemes();

export function SurveyEditor({ json = {} }: SurveyComponentProps) {
  const { loaded, setLoaded, creatorRef } = useInitEditor(json);
  // useCheckThemes(loaded, creatorRef);

  const { styles, theme } = useSurveyThemes();
  // console.log(theme, creatorRef.current);

  if (loaded) {
    return (
      <SurveyCreatorComponent
        creator={creatorRef.current}
        style={styles}
        // style={theme?.cssVariables}
      />
    );
  }

  return 'loading…';
}

const useCachingEditor = (name: string = 'edtr') => {
  const [value, setValue, remove] = useLocalStorage(name, {});

  const setCache = useMemo(() => {
    return debounce((m: string, ctx: any) => {
      // console.log(JSON.stringify(ctx.JSON, null, 2));
      setValue(ctx.JSON);
    }, 1000);
  }, [setValue]);

  return {
    cache: value,
    setCache,
    remove,
  };
};

const useInitEditor = (json = {}) => {
  const [loaded, setLoaded] = useState(false);
  const creatorRef = useRef<SurveyCreator>(null as any);
  const { cache, setCache } = useCachingEditor();

  // console.log({ cache });

  useEffect(() => {
    if (loaded) return;

    const t = setTimeout(() => {
      try {
        const creator = new SurveyCreator();

        creator.JSON = cache;
        creator.toolbox.forceCompact = true;

        // creator.applyTheme(theme);

        creator.onStateChanged.add((ctx, values) => {
          setCache('onStateChanged', ctx);
        });

        creator.onPropertyChanged.add((ctx, values) => {
          setCache('onPropertyChanged', ctx);
        });

        // belum jelas pakai nya
        // creator.onUploadFile.add(function (sender, options) {
        //   options.callback(
        //     'success',
        //     // @ts-ignore
        //     options.files.map(function (file) {
        //       return {
        //         file: file,
        //         content: URL.createObjectURL(file),
        //       };
        //     }),
        //   );
        // });

        creatorRef.current = creator;

        setLoaded(true);
      } catch (e) {
        console.log({ e });
      }
    });

    return () => {
      clearTimeout(t);
    };
  }, [setCache]);

  return { loaded, setLoaded, creatorRef };
};

const useCheckThemes = (
  loaded: boolean,
  creatorRef: RefObject<SurveyCreator>,
) => {
  const { theme } = useSurveyThemes();

  useEffect(() => {
    if (loaded) {
      function run() {
        try {
          // const klass = '.svc-creator__non-commercial-text';
          // const el: any = document.querySelectorAll(klass)?.[0];
          // if (el) {
          //   el.style.display = 'none';
          // }

          // re-apply theme when it changes
          // creatorRef.current?.applyTheme?.(theme);
          console.log('DONE', creatorRef.current);
        } catch (e) {}
      }

      setTimeout(run);
      const t = setTimeout(run, 100);

      return () => {
        clearTimeout(t);
      };
    }
  }, [loaded]);
};
