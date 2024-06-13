"use client";

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { FormEvent } from 'react';
import { useCookies } from "next-client-cookies"
import { ChangeEvent } from 'react';

export default function Page() {
  const cookies = useCookies();
  const [guess, setGuess] = useState('');
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 1000));
  const [message, setMessage] = useState('');

  


  const handleGuessChange = (event: ChangeEvent<HTMLInputElement>) => {
    cookies.set("secretPIN", targetNumber.toString());
    setGuess(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const guessNumber = parseInt(guess);
    if (guessNumber === targetNumber) {
      setMessage('Congratulations! You guessed the number!');
      cookies.set("PIN", targetNumber.toString());
    } else if (guessNumber < targetNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
    setGuess('');
  };

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <p className={"${lusitana.className} text-x1 text-gray800 md:text-3x1 m:leading-normal"}></p>
            <strong>Errate deinen PIN!</strong>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Wähle eine Zahl zwischen 1 und 1000"
              value={guess}
              onChange={handleGuessChange}
            />
            <button
              type="submit"
              className="border-white border-2 mt-4 mr-10 items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:border-blue-500 hover:text-blue-500 hover:bg-white md:text-base"
            >
              Raten
            </button>
            <a
              href='/dashboard'
              className="border-white border-2 mt-4 items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 md:text-base "
            >
              Anmlden
            </a>
          </form>
          {message && <p className="mt-4 text-gray-800">{message}</p>}
        </div>
      </div>
    </main>
  );
}
