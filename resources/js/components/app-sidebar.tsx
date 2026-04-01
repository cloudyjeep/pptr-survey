import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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

function navItem(title: string, href: any, icon?: any, devOnly?: boolean) {
  if (devOnly && process.env.NODE_ENV !== 'development') return null as any;
  return { title, href, icon };
}

const mainNavItems: NavItem[] = [
  navItem('Form Survey', dashboard(), LayoutGrid),
  navItem('List Survey', '/maintenance/surveys', Folder),
  //   navItem('Surveys', '/surveys', Folder, true),
  navItem('Survey Creator', '/maintenance/surveys/create', PlusSquare, true),
].filter((f) => f);

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
  console.log(['ENV'], process.env.NODE_ENV);

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
