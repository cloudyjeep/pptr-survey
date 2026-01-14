import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'User Management', href: '/users' },
    { title: 'Users', href: '/users' },
];

type UserRow = {
    id: number;
    name: string;
    email: string;
    roles: string[];
    status: string;
    last_login?: string | null;
    created_at?: string;
};

export default function UsersList() {
    const [users, setUsers] = useState<UserRow[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        // fetch('/api/users')
        //     .then((r) => r.json())
        //     .then((data) => mounted && setUsers(data))
        //     .catch((e) => console.error(e))
        //     .finally(() => mounted && setLoading(false));
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Users</h2>
                    <div>
                        <a href="/users/create" className="rounded bg-indigo-600 px-3 py-1 text-sm text-white">Create user</a>
                    </div>
                </div>

                <div className="mt-4 overflow-auto rounded-lg border">
                    <table className="min-w-full divide-y">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Email</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Roles</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Last Login</th>
                                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y bg-white">
                            {/* {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-6 text-center text-sm text-gray-500">Loading users...</td>
                                </tr>
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-4 py-6 text-center text-sm text-gray-500">No users found.</td>
                                </tr>
                            ) : (
                                users.map((u) => (
                                    <tr key={u.id}>
                                        <td className="px-4 py-3"><div className="text-sm font-medium text-gray-900">{u.name}</div></td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{u.email}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{u.roles.join(', ')}</td>
                                        <td className="px-4 py-3 text-sm">
                                            <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${u.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>{u.status}</span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{u.last_login ? new Date(u.last_login).toLocaleString() : '-'}</td>
                                        <td className="px-4 py-3 text-right text-sm">
                                            <a href={`/users/${u.id}`} className="mr-2 rounded bg-blue-500 px-2 py-1 text-white">View</a>
                                            <a href={`/users/${u.id}`} className="mr-2 rounded bg-yellow-500 px-2 py-1 text-white">Edit</a>
                                            <button className="rounded bg-red-600 px-2 py-1 text-white">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
