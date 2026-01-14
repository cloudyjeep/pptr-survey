import { SurveyEditor } from '@/components/survey/survey-editor';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Maintenance', href: '/maintenance/surveys' },
  { title: 'Survey Creator', href: '/maintenance/surveys/create' },
];

export default function SurveyCreate() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Survey Creator" />
        <SurveyEditor json={{}} />
      {/* <div className="p-6">

        <h2 className="text-lg font-semibold">Survey Creator</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Placeholder for survey creation UI.
        </p>
      </div> */}
    </AppLayout>
  );
}
