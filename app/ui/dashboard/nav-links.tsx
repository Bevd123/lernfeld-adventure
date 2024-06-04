"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Level 1',
    href: '/dashboard?Nav=1',
    icon: HomeIcon 
  },
  {
    name: 'Level 2',
    href: '/dashboard/Level-2?Nav=1',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Level 3',
    href: '/dashboard/Level-3?Nav=1',
    icon: UserGroupIcon 
  },
  { name: 'Level 4',
    href: '/dashboard/Level-4?Nav=1',
    icon: HomeIcon 
  },
  {
    name: 'Level 5',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
