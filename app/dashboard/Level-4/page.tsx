"use client";

import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

function ProfilePage() {
  const cookies = useCookies();
  const [username, setUsername] = useState(cookies.get("username") || '');
  const [email, setEmail] = useState(cookies.get("email") || '');
  const [password, setPassword] = useState(cookies.get("PIN") || '');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [ccv, setCcv] = useState('');
  const [exp, setExp] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isWrong, setIsWrong] = useState(false)
  const [wrongCount, setWrongCount] = useState(0);


  const handleSave = () => {
    if(creditCardNumber == "1435-5873-2398-5488" && ccv == "756" && exp == "11/27"){
      console.log("Cookies clearing");
      cookies.remove("username");
      cookies.remove("email");
      cookies.remove("PIN");
      cookies.remove("CreditCard");
      cookies.remove("CCV");
      cookies.remove("EXP");
      console.log("Cookies cleared");
      cookies.set("username", username);
      cookies.set("email", email);
      cookies.set("PIN", password);
      cookies.set("CreditCard", creditCardNumber);
      cookies.set("CCV", ccv);
      cookies.set("EXP", exp);
      window.location.href = "Level-5"
    } else if (wrongCount >= 3){
        cookies.remove("username");
        cookies.remove("email");
        cookies.remove("PIN");
        cookies.remove("CreditCard");
        cookies.remove("CCV");
        cookies.remove("EXP");
        alert("3 Fehlversuche, bitte neustarten.")
        window.location.href = "/"
    } else {
        setIsWrong(true)
        setWrongCount(wrongCount + 1)
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };


  return (
    <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="profile-info w-full max-w-md">
        <div className="rounded-lg border-4 bg-gray-100 p-4 my-4">
          <label className='block text-gray-700 font-bold mb-4' htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="rounded-lg border-4 bg-gray-100 p-4 my-4">
          <label className='block text-gray-700 font-bold mb-2' htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="rounded-lg border-4 bg-gray-100 p-4 my-4">
          <label className='block text-gray-700 font-bold mb-2' htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex rounded-lg border-4 bg-gray-100 p-4 my-4 mr-2">
          <label className='block text-gray-700 font-bold mb-2' htmlFor="creditCardNumber">Kreditkarten Nummer</label>
          <input
            type="text"
            id="creditCardNumber"
            value={creditCardNumber}
            title='Bitte geben sie Alle Zahlen im Binärformat an! Beispiel: 0000-0000-0000'
            pattern="([0-9]{4})+-([0-9]{4})+-([0-9]{4})+-([0-9]{4})"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-red-500'
            onChange={(e) => setCreditCardNumber(e.target.value)} 
            /><ShieldCheckIcon
            className="ml-5 mt-3 w-6 h-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {isHovering && (
          <div className="ml-3 bg-white p-2 rounded-md shadow-md fixed mt-10">
            <p>lessSecure&trade; Ihre Kreditkartennummer lautet: 0b10110011011 - 0b1011011110001 - 0b100101011110 - 0b1010101110000</p> {/* 1435-5873-2398-5488 */}
          </div>
        )}
        </div>
        <div className=" flex rounded-lg border-4 bg-gray-100 p-4 my-4">
          <label className='block text-gray-700 font-bold mb-2 mr-2' htmlFor="ccv">CVV</label>
          <input
            type="text"
            id="ccv"
            value={ccv}
            pattern="([0-9]{3})"
            title='Bitte geben sie Alle Zahlen im Binärformat an! Beispiel: 000'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-red-500'
            onChange={(e) => setCcv(e.target.value)} /><ShieldCheckIcon
            className="ml-5 mt-3 w-6 h-6"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          />
          {isHovering1 && (
          <div className="ml-3 bg-white p-2 rounded-md shadow-md fixed mt-10">
            <p>lessSecure&trade; Ihre CVV lautet: 0x2F4</p> {/*756*/}
          </div>
        )}
        </div>
        <div className="flex rounded-lg border-4 bg-gray-100 p-4">
          <label className='block text-gray-700 font-bold mb-4 mr-2' htmlFor="exp">EXP</label>
          <input
            type="text"
            id="exp"
            value={exp}
            pattern="([0-9]{1,2})+/([0-9]{2})"
            title='Bitte geben sie Alle Zahlen im Binärformat an! Beispiel: 00/00'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-red-500 p-2 '
            onChange={(e) => setExp(e.target.value)}
          /><ShieldCheckIcon
          className="ml-5 mt-3 w-6 h-6"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        />
        {isHovering2 && (
          <div className="ml-3 bg-white p-2 rounded-md shadow-md fixed mt-10">
            <p>lessSecure&trade; Ihre EXP lautet: 0o13/0x33</p> {/*11/27*/}
          </div>
        )}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button type="submit" onClick={handleSave}className="border-white border-2 mt-4 items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 md:text-base w-full"> Speichern </button>
        <button onClick={handleSave}className="border-white border-2 mt-4 items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 md:text-base w-full"> Zurück </button>
      </div>
    </div>
  );
}

export default ProfilePage;
