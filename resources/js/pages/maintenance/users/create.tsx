import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'User Management', href: '/users' },
    { title: 'Create User', href: '/users/create' },
];

export default function UsersCreate() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />
            <div className="p-6">
                <h2 className="text-lg font-semibold">Create User</h2>
                <p className="mt-2 text-sm text-muted-foreground">Placeholder create user form.</p>
            </div>
        </AppLayout>
    );
}
