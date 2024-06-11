"use client";

import { useCookies } from "next-client-cookies";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page(){

    const cookies = useCookies();    

    const [progress, setProgress] = useState(0);
    const [func, setFunc] = useState("");
    const pending = true;

    const gameLoss = () => {
        alert("Sie wurden als Roboter Identifiziert und ihr Konto wurde gesperrt!");
        cookies.remove("username");
        cookies.remove("email");
        cookies.remove("PIN");
        cookies.remove("CreditCard");
        cookies.remove("CCV");
        cookies.remove("EXP");
        window.location.href = "/";
    }

    const checkInput = () => {
        console.log(func)
        if (func.toString() === "f(x) = 0.25x^3+1.5x^2-2.25x-2"){
            alert("Won!");
        } else if (progress == 3){
            gameLoss()
        } else {
            setProgress(progress + 1);
        }
    }

    return(
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl underline pb-5">Captcha (Hilfsmittelfreier Teil)</h1>
                <p className="p-5">Bitte bestätigen sie das Sie kein Roboter sind, indem Sie das folgende Rätsel lösen.</p>
                <Image 
                src={"/re/function.jpg"}
                width={512}
                height={512}
                alt={"Captcha"}></Image>
                <input type="text" onChange={e => setFunc(e.target.value)} defaultValue="f(x) = " title="Beispiel für eine korrekte schreibweise wäre 'f(x) = 0.25x^3+1.5x^2-2.25x-2'" className="border-2 border-black p-2 m-2 "/>
                <button className="border-white border-2 mt-4 gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 md:text-base " onClick={() => checkInput()}>
                    CAPTCHA Bestätigen
                </button>
                {/*0.25x^3+1.5x^2-2.25x-2*/}
            </div>
        </div>
        
        
    )
}