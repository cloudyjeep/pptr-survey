import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Maintenance', href: '/maintenance/surveys' },
    { title: 'List Survey', href: '/maintenance/surveys' },
];

export default function SurveyList() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="List Survey" />
            <div className="p-6">
                <h2 className="text-lg font-semibold">List Survey</h2>
                <p className="mt-2 text-sm text-muted-foreground">Placeholder for survey list.</p>
            </div>
        </AppLayout>
    );
}
