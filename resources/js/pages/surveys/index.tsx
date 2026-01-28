import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// SurveyJS imports (install survey-core + survey-react-ui)
import { useState } from 'react';
import { useInterval } from 'react-use';
import { FormSurvey } from '../dashboard';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Surveys',
    href: '/surveys',
  },
];

const useDevMode = () => {
  const getValue = () => {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem('edtr'));
    } catch (e) {}
    return {};
  };

  const [value, setValue] = useState(getValue);
  const [name, setName] = useState('backup');

  useInterval(() => {
    const d = new Date();
    setName((name) => `backup-${d.getHours()}`);
  }, 1000 * 10);

  const component = (
    <div className="flex justify-center gap-3 py-1">
      <button className="w-28 rounded ring" onClick={() => setValue(getValue)}>
        Update
      </button>
      <input
        className="rounded bg-input"
        value={name}
        onInput={(e) => setName((e.target as any).value)}
      ></input>
      <button
        className="w-28 rounded ring"
        children="Save"
        onClick={() => {
          localStorage.setItem(name, JSON.stringify(value));
        }}
      />
    </div>
  );
  return {
    value,
    component,
  };
};

export default function Surveys({ surveyJson }: { surveyJson: any }) {
  const { value, component } = useDevMode();

  // useEffect(() => {
  //   const t = setInterval(() => {
  //     try {
  //       // @ts-ignore
  //       const newValue = JSON.parse(localStorage.getItem('edtr'));
  //       setValue(newValue);
  //     } catch (e) {}
  //   }, 1000);
  //   return () => clearInterval(t);
  // }, []);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Surveys" />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-b-xl">
        {component}
        <div className="relative min-h-[40vh] flex-1 overflow-hidden border-0 border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
          {surveyJson ? (
            // <SurveyEditor json={surveyJson} />
            // <SurveyViewer json={sample} />
            <FormSurvey value={value} />
          ) : (
            // <SurveyViewer
            //   json={{
            //     elements: [
            //       {
            //         type: 'file',
            //         name: 'foto',
            //         title: 'Upload Foto',
            //         acceptedTypes: 'image/*',
            //       },
            //     ],
            //   }}
            // />
            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
          )}
        </div>
      </div>
    </AppLayout>
  );
}
