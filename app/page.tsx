"use client";

//imports
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import { FiGithub }  from 'react-icons/fi';
import { DocumentIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Page() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTitleVisible(true);
    }, 500); // Delay for 1 second

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <AcmeLogo />
          <h1 
            className={`text-3xl font-bold text-gray-900 md:text-4xl transition-opacity duration-1000 ${lusitana.className} ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Willkommen zum Lernfeld-Adventure
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row"> {/* Change to flex-col for md screens */}
          <Link
            href="/dashboard?Nav=1"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base md:px-12"
          >
            <span>Starten</span> <ArrowRightIcon className="w-4 md:w-5" />
          </Link>
          <Link
            href="/documentation"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base md:px-12"
          >
            <span>Dokumentation</span>  <DocumentIcon className="w-4 md:w-5" />
          </Link>
          <Link
            href="https://github.com/Bevd123/lernfeld-adventure"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base md:px-12"
          >
            <span>Github</span> <FiGithub className="w-4 md:w-5" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
        </div>
      </div>
    </main>
  );
}
