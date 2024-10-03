'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link 
      href={href} 
      className={`${isActive ? 'font-bold' : ''} hover:underline`}
    >
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <ul className="flex flex-wrap justify-center space-x-4">
      <li><NavLink href="/">Dashboard</NavLink></li>
      <li><NavLink href="/properties">Properties</NavLink></li>
      <li><NavLink href="/guests">Guests</NavLink></li>
      <li><NavLink href="/bookings">Bookings</NavLink></li>
      <li><NavLink href="/calendar">Calendar</NavLink></li>
      <li><NavLink href="/settings">Settings</NavLink></li>
    </ul>
  );
}