"use client";

import { useCookies } from "next-client-cookies";
import { useState } from "react";
import Image from "next/image";
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  const cookies = useCookies();

  const [progress, setProgress] = useState(0);
  const [func, setFunc] = useState("");
  const pending = true;

  //function for game loss
  const gameLoss = () => {
    alert("Sie wurden als Roboter Identifiziert und ihr Konto wurde gesperrt!");
    cookies.remove("username");
    cookies.remove("email");
    cookies.remove("PIN");
    cookies.remove("CreditCard");
    cookies.remove("CCV");
    cookies.remove("EXP");
    window.location.href = "/";
  };

  //check if input is correct
  const checkInput = () => {
    console.log(func);
    if (func.toString() === "f(x) = 0.25x^3+1.5x^2-2.25x-2") {
      alert("Won!");
    } else if (progress === 3) {
      gameLoss();
    } else {
      setProgress(progress + 1);
    }
  };

  //returning Page
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white px-6 py-10 md:w-full md:px-20">
          <h1 className={`text-xl text-gray-800 md:text-3xl md:leading-normal text-center ${lusitana.className}`}>
            Captcha (Hilfsmittelfreier Teil)
          </h1>
          <p className="p-5 text-gray-800 text-center">
            Bitte bestätigen sie das Sie kein Roboter sind, indem Sie das folgende Rätsel lösen.
          </p>
          <div className="relative view-full h-96 ">
            <Image
              src={"/re/function.jpg"}
              alt={"Captcha"}
              fill 
              className="rounded-lg"
            />
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full">
            <input
              type="text"
              onChange={(e) => setFunc(e.target.value)}
              defaultValue="f(x) = "
              title="Beispiel für eine korrekte schreibweise wäre 'f(x) = 0.25x^3+1.5x^2-2.25x-2'"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => checkInput()}
              className="border-white border-2 mt-4 items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:border-blue-500 hover:text-blue-500 hover:bg-white md:text-base w-full"
            >
              CAPTCHA Bestätigen
            </button>
          </form>
          {/*0.25x^3+1.5x^2-2.25x-2*/}
        </div>
      </div>
    </main>
  );
}
