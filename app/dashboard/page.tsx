"use client";

import { useState, useEffect } from "react";
import { useCookies } from 'next-client-cookies';

export default function SignupPage() {
    const cookies = useCookies();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {

            cookies.set("name", username);
            cookies.set("email", email);
            cookies.set("password", password);

            console.log("Signup successful:", { username, email, password });
        } catch (error) {
            setError("Signup failed");
        }
    };

    useEffect(() => {
        document.title = "Signup | Lernfeld Adventure";
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 radius-30">
            <h1 className="text-4xl font-bold mb-8">Lernfeld Adventure</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                {error && (
                    <div className="text-red-500 mb-4">{error}</div>
                )}
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
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Signup
                </button>
            </form>
        </div>
    );
}
