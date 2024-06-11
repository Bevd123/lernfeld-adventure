"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page(){

    const [progress, setProgress] = useState(0);
    const [func, setFunc] = useState("");

    const checkInput = () => {
        console.log(func)
        if (func.toString() === "f(x) = 0.25x^3+1.5x^2-2.25x-2"){
            alert("Won!");
        }
    }

    return(
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl underline">Captcha</h1>
                <p>Bitte bestätigen sie das Sie kein Roboter sind indem sie das folgende Rätsel lösen.</p>
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