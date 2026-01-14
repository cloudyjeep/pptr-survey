import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbsBase: BreadcrumbItem[] = [
    { title: 'User Management', href: '/users' },
];

export default function UsersDetail() {
    const { props } = usePage();
    const id = props?.id ?? null;

    const breadcrumbs: BreadcrumbItem[] = [
        ...breadcrumbsBase,
        { title: 'User Detail', href: `/users/${id}` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Detail" />
            <div className="p-6">
                <h2 className="text-lg font-semibold">User Detail</h2>
                <p className="mt-2 text-sm text-muted-foreground">Detail for user id: {id}</p>
            </div>
        </AppLayout>
    );
}
