"using client";

//imports
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import { FiGithub }  from 'react-icons/fi';
import { DocumentIcon } from '@heroicons/react/24/outline';

export default function Page() {
  //no need to explain simply just showing the page
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <AcmeLogo />
          <h1 className={`text-4xl font-bold text-gray-900 md:text-6xl ${lusitana.className}`}>
            Willkommen zum Lernfeld-Adventure
          </h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-lg text-gray-600 md:text-xl">
          </p>
          <Link
            href="/dashboard?Nav=1"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base md:px-12"
          >
            <span>Starten</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/documentation"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base md:px-12"
          >
            <span>Dokumentation</span>  <DocumentIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="https://github.com/Bevd123/lernfeld-adventure"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base md:px-12"
          >
            <span>Github</span> <FiGithub className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
        </div>
      </div>
    </main>
  );
}
