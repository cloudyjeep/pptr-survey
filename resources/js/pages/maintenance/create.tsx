import { SurveyEditor } from '@/components/survey/survey-editor';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useLocalStorage } from 'react-use';
import { FormSurvey } from '../dashboard';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Maintenance', href: '/maintenance/surveys' },
  { title: 'Survey Creator', href: '/maintenance/surveys/create' },
];

export default function SurveyCreate() {
  const [showFormTesting, setShowFormTestig] = useLocalStorage(
    'show-form-testing',
    false,
  );

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Survey Creator" />
      <div className="fixed top-4 right-4">
        <Button
          size="sm"
          variant={showFormTesting ? 'destructive' : 'secondary'}
          onClick={() => setShowFormTestig(!showFormTesting)}
        >
          {showFormTesting ? 'Hide Form' : 'Show Form'}
        </Button>
      </div>
      {showFormTesting ? (
        <FormSurvey
          // value={{
          //   title: 'Survey Perumdam',
          //   logoFit: 'cover',
          //   pages: [
          //     {
          //       name: 'page3',
          //       title: 'Foto dan Dokumentasi',
          //       elements: [
          //         {
          //           type: 'file',
          //           name: 'Foto Properti',
          //           title: 'Foto Properti',
          //           isRequired: true,
          //           allowMultiple: true,
          //           acceptedCategories: ['image'],
          //           maxFiles: 3,
          //           sourceType: 'camera',
          //           fileOrPhotoPlaceholder:
          //             'Pilih button dibawah untuk mengambil foto',
          //           photoPlaceholder:
          //             'Pilih button dibawah untuk mengambil foto',
          //           filePlaceholder:
          //             'Pilih button dibawah untuk mengambil foto',
          //         },
          //         {
          //           type: 'file',
          //           name: 'Foto Bersama Pelanggan',
          //           title: 'Foto Bersama orang yg di survey',
          //           allowMultiple: true,
          //           acceptedCategories: ['image'],
          //           maxFiles: 3,
          //           sourceType: 'camera',
          //           fileOrPhotoPlaceholder:
          //             'Pilih button dibawah untuk mengambil foto',
          //           photoPlaceholder:
          //             'Pilih button dibawah untuk mengambil foto',
          //           filePlaceholder:
          //             'Pilih button dibawah untuk mengambil foto',
          //         },
          //       ],
          //     },
          //   ],
          //   calculatedValues: [
          //     {
          //       name: 'var1',
          //     },
          //   ],
          //   progressBarShowPageTitles: true,
          //   showPreviewBeforeComplete: true,
          // }}
        />
      ) : (
        <SurveyEditor json={{}} />
      )}
    </AppLayout>
  );
}
