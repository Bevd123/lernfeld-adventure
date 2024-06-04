import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <body className='bg-zinc-800 text-white text-center justify-center items-center flex flex-col h-screen'>
      <div>
        <div className='pr-20'> 
          <h1 className='text-4xl font-bold p-2'>404</h1>
          <h2>Not Found</h2>
          <p className='p-2'>Could not find requested resource</p>
          <div className='items-center justify-center flex'>
            <ArrowRightIcon className='h-4 w-4 mr-2' />
            <Link href="/">Return Home</Link>
            <ArrowLeftIcon className='h-4 w-4 ml-2' />
          </div>
        </div>
      </div>
    </body>
  )
}
