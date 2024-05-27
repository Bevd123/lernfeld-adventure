"use client";

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  const [guess, setGuess] = useState('');
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('');

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const guessNumber = parseInt(guess);
    if (guessNumber === targetNumber) {
      setMessage('Congratulations! You guessed the number!');
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
            <strong>Guess the Number!</strong>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter a number between 1 and 100"
              value={guess}
              onChange={handleGuessChange}
            />
            <button
              type="submit"
              className="mt-4 flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              Guess
            </button>
          </form>
          {message && <p className="mt-4 text-gray-800">{message}</p>}
        </div>
      </div>
    </main>
  );
}
