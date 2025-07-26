'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  Home,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  UserCircle,
  LogOut,
  Store,
  Search,
  PanelLeft,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type UserRole = 'supplier' | 'vendor';

const supplierNavItems = [
  { href: '/dashboard', label: 'Overview', icon: Home },
  { href: '/dashboard/products', label: 'Products', icon: Package },
  { href: '/dashboard/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/dashboard/chat', label: 'Chat', icon: MessageSquare },
  { href: '/dashboard/profile', label: 'Profile', icon: UserCircle },
];

const vendorNavItems = [
  { href: '/dashboard', label: 'Overview', icon: Home },
  { href: '/dashboard/marketplace', label: 'Marketplace', icon: Store },
  { href: '/dashboard/suppliers', label: 'Find Suppliers', icon: Search },
  { href: '/dashboard/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/dashboard/chat', label: 'Chat', icon: MessageSquare },
  { href: '/dashboard/profile', label: 'Profile', icon: UserCircle },
];

function NavLink({ item, isMobile = false }: { item: { href: string; label: string; icon: React.ElementType }; isMobile?: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = item.icon;

  if (isMobile) {
    return (
      <Link
        href={item.href}
        className={`flex items-center gap-4 px-2.5 ${isActive ? 'text-foreground bg-accent' : 'text-muted-foreground'} hover:text-foreground rounded-lg py-2`}
      >
        <Icon className="h-5 w-5" />
        {item.label}
      </Link>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={item.href}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:h-9 md:w-9 ${isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{item.label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>('vendor');
  const navItems = userRole === 'supplier' ? supplierNavItems : vendorNavItems;

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Shield className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">VendorTrust</span>
          </Link>
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                 <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                 </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Shield className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">VendorTrust</span>
                </Link>
                {navItems.map((item) => (
                  <NavLink key={item.href} item={item} isMobile />
                ))}
                 <Link href="/" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                  <LogOut className="h-5 w-5" />
                  Logout
                 </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 ml-auto">
            <Label htmlFor="role-switcher" className="text-sm font-medium">
              {userRole === 'supplier' ? 'Supplier View' : 'Vendor View'}
            </Label>
            <Switch
              id="role-switcher"
              checked={userRole === 'vendor'}
              onCheckedChange={(checked) => setUserRole(checked ? 'vendor' : 'supplier')}
              aria-label="Toggle user role"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <UserCircle className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link href="/">Logout</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {React.cloneElement(children as React.ReactElement, { userRole })}
        </main>
      </div>
    </div>
  );
}
