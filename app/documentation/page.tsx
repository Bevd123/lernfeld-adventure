'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '../ui/fonts';
import Image from 'next/image';
import { useState } from 'react';
import { sculptureList } from '../../public/data.js';

export default function Page() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <main className="flex min-h-screen flex-col p-6 select-none">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-40">
        {<AcmeLogo />}{' '}
        <span className="text-sm font-medium text-white">Documentation</span>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>
              <button onClick={handleNextClick} className=' px-5 mb-10 text-white bg-blue-500 flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:bg-white transition-colors rounded-3xl border-blue-500 border-2 p-2'>Next <ArrowRightIcon className='w-6 h-6' /></button>
              <h2>
                <i>{sculpture.week} </i>
                vom {sculpture.time}
              </h2>
              <h3>
                ({index + 1} of {sculptureList.length})
              </h3>
              <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
              </button>
            </strong>
          </p>
        </div>
        <div className="flex flex-col text-center justify-center rounded-lg bg-gray-50 p-6 md:w-3/5 md:px-28 md:py-12">
          <div className='text-center  p-20'>

            <h1 className='text-3xl font-bold text-gray-800'>{sculpture.description}</h1>
            
          </div>
          {showMore && <p>{sculpture.extra}</p>}
        </div>
      </div>
    </main>
  );
}
