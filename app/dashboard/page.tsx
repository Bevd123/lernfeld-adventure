"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { complete } from "../../public/json/completion.json";
import { useState, useEffect } from "react";
import { useCookies } from 'next-client-cookies';
import { usePathname } from "next/navigation";

export default function SignupPage() {
    const cookies = useCookies();
    const [username, setUsername] = useState("Max Mustermann*innen");
    const [email, setEmail] = useState("Max.Muster@yahu.de");
    const [password, setPassword] = useState(cookies.get("PIN"));
    const [ResetPassword, setResetPassword] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setError("Versuche deinen PIN zu ändern!"), 4000);
        return () => clearTimeout(timer);
    }, []);

    const reset = () => {
        cookies.set("username", username);
        cookies.set("email", email);
        complete[0]["Zwei"] = true;
        window.location.href = "dashboard/Level-2";
    };

    const pathname = usePathname();

    const checkWin = () => {
        if (password === cookies.get("secretPIN")) {
            window.location.href = "/dashboard/Level-3";
        } else {
            setError("Falsch!");
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (password === "420") {
                console.log("Signup successful:", { username, email, password });
                cookies.set("username", username);
                cookies.set("email", email);
            }

        } catch (error) {
            setError("Signup failed");
        }
    };

    useEffect(() => {
        document.title = "Signup | Lernfeld Adventure";
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-center">Lernfeld Adventure</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                {cookies.get("PIN") !== "420" && <div className="text-red-500 mb-4 text-center">{error}</div>}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        PIN <ShieldCheckIcon title="Pin" className="h-5 w-5 inline-block mb-1" />
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    onClick={() => checkWin()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    Anmelden
                </button>
                <button
                    
                    onClick={reset}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
                >
                    PIN Vergessen?
                </button>
            </form>
        </div>
    );
}
