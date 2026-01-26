import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, PlusSquare, User } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Form Survey',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Surveys',
        href: '/surveys',
        icon: Folder,
    },
    {
        title: 'Survey Creator',
        href: '/maintenance/surveys/create',
        icon: PlusSquare,
    },
    {
        title: 'List Survey',
        href: '/maintenance/surveys',
        icon: Folder,
    }
];

const maintenanceNavItems: NavItem[] = [
    {
        title: 'List Survey',
        href: '/maintenance/surveys',
        icon: Folder,
    },
    {
        title: 'Users',
        href: '/maintenance/users/list',
        icon: User,
    },
    {
        title: 'Survey Creator',
        href: '/maintenance/surveys/create',
        icon: PlusSquare,
    },
    {
        title: 'Survey Rilis',
        href: '/maintenance/surveys/rilis',
        icon: BookOpen,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];



export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />

                {/* <SidebarGroup className="px-2 py-0">
                    <SidebarGroupLabel>Maintenance</SidebarGroupLabel>
                    <SidebarMenu>
                        {maintenanceNavItems.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.href} prefetch>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup> */}

                
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
