import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useWindowSize } from 'react-use';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Maintenance', href: '/maintenance/surveys' },
  { title: 'List Survey', href: '/maintenance/surveys' },
];

export default function SurveyList() {
  const id = '1JRVXPeTmY5zf4iVZfWylp5Y33CdSoz78BlVAWr8mV1I';
  const w = useWindowSize();
  const { auth } = usePage<SharedData>().props;

  console.log(auth);

  const userId = auth?.user?.id;
  const allowed = [
    //
    2, // razif
    22, // fandry
  ];

  if (allowed.includes(userId)) {
    //   if (auth?.user.id)

    return (
      <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="List Survey" />
        <iframe
          src={`https://docs.google.com/spreadsheets/d/${id}/view?rm=embedded&widget=true&headers=false`}
          width="100%"
          height={w.height - 80}
          frameBorder="0"
        />
        {/* <div className="p-6">
                <h2 className="text-lg font-semibold">List Survey</h2>
                <p className="mt-2 text-sm text-muted-foreground">Placeholder for survey list.</p>
            </div> */}
      </AppLayout>
    );
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="List Survey" />
      <div className="p-4">
        <h2 className="text-lg text-red-400">
          You are not allowed to access this feature !
        </h2>
        <span className="text-sm font-light italic opacity-70">
          Contact your administrator for help.
        </span>
      </div>
    </AppLayout>
  );
}
