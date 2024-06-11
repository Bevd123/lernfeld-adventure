"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useCookies } from 'next-client-cookies';
import { CheckIcon } from '@heroicons/react/24/outline';
import { XMarkIcon }  from '@heroicons/react/24/outline';
import { CookiesProvider } from 'next-client-cookies/server';
import { complete } from "../../../public/json/completion.json"

const links = [
  { name: 'Level 1',
    href: '/dashboard',
    icon:  complete[0]["Eins"] ? CheckIcon : XMarkIcon,
  },
  {
    name: 'Level 2',
    href: '/dashboard/Level-2',
    icon: complete[0]["Zwei"] ? CheckIcon : XMarkIcon,
  },
  { 
    name: 'Level 3',
    href: '/dashboard/Level-3',
    icon: complete[0]["Drei"] ? CheckIcon : XMarkIcon ,
  },
  { 
    name: 'Level 4',
    href: '/dashboard/Level-4',
    icon: complete[0]["Vier"] ? CheckIcon : XMarkIcon ,
  },
  {
    name: 'Level 5',
    href: '/dashboard/Level-5',
    icon: complete[0]["Fünf"] ? CheckIcon : XMarkIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const cookies = useCookies();

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
