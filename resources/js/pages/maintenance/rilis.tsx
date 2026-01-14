import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Maintenance', href: '/maintenance/surveys' },
    { title: 'Survey Rilis', href: '/maintenance/surveys/rilis' },
];

export default function SurveyRilis() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Survey Rilis" />
            <div className="p-6">
                <h2 className="text-lg font-semibold">Survey Rilis</h2>
                <p className="mt-2 text-sm text-muted-foreground">Placeholder for survey release management.</p>
            </div>
        </AppLayout>
    );
}
