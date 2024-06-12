"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { any, boolean, number, string } from "zod";
import { CookiesProvider } from "next-client-cookies/server";

const products = [
  {
    id: 1,
    name: "$product.name",
    price: 19.99,
    images: ["/re/flow.png", "/re/flow2.png"], // Add multiple images
  },
  {
    id: 2,
    name: "$product.name",
    price: 29.99,
    images: ["/re/garden.png", "/re/garden2.png"], // Add multiple images
  },
  {
    id: 3,
    name: "$product.name",
    price: 39.99,
    images: ["/re/house.png", "/re/house2.png"], // Add multiple images
  },
  {
    id: 4,
    name: "$product.name",
    price: 49.99,
    images: ["/re/kroete.png", "/re/kroete2.png"], // Add multiple images
  },
  {
    id: 5,
    name: "$product.name",
    price: 59.99,
    images: ["/re/schlauch.png", "/re/schlauch2.png"], // Add multiple images
  },
  {
    id: 6,
    name: "$product.name",
    price: 69.99,
    images: ["/re/shroom.png", "/re/shroom2.png"], // Add multiple images
  },
];

export default function Page() {
  const [cart, setCart] = useState<any[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState([0, 1, 1, 0, 1, 0, 0]);
  const [isExtended, setIsExtended] = useState(false);

  const winCondition = [
    {
      id: 3,
      name: "Gartenhaus",
      price: 39.99,
      images: ["/re/house.png", "/re/house2.png"],
    },
    {
      id: 2,
      name: "Gartenzwerg",
      price: 29.99,
      images: ["/re/garden.png", "/re/garden2.png"],
    },
  ];

  const SecWinCondition = [
    {
      id: 2,
      name: "Gartenzwerg",
      price: 29.99,
      images: ["/re/garden.png", "/re/garden2.png"],
    },
    {
      id: 3,
      name: "Gartenhaus",
      price: 39.99,
      images: ["/re/house.png", "/re/house2.png"],
    },
  ];

  const handleExtend = () => {
    setIsExtended(!isExtended);
  };

  const isWin = (deposit: any) => {
    if (
      JSON.stringify(deposit) === JSON.stringify(winCondition) ||
      JSON.stringify(deposit) === JSON.stringify(SecWinCondition)
    ) {
      return true;
    } else {
      console.log(JSON.stringify(deposit));
      console.log(JSON.stringify(winCondition));
      return false;
    }
  };

  const handleSwitchImages = (productId: any) => {
    const myArr = [...activeImageIndex];
    myArr[productId] =
      (activeImageIndex[productId] = activeImageIndex[productId] === 1 ? 0 : 1);
    setActiveImageIndex(myArr);
  };

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const cartCheck = () => {
    if (isWin(cart)) {
      window.location.href = "/dashboard/Level-4";
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 select-none">
      <button
        className={`px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors absolute top-4 right-4`}
        onClick={handleExtend}
      >
        {isExtended ? "Schließen" : "Einkaufsliste"}
      </button>

      {isExtended && (
        <div className="absolute top-12 right-4 bg-white p-4 rounded-lg shadow-md">
          <div>
            <strong>Einkaufsliste</strong>
            <ul>
              <li>Gartenzwerg - $29.99</li>
              <li>Gartenhaus - $39.99</li>
            </ul>
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold text-gray-800">Gartenshop</h1>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="relative">
              <Image
                src={product.images[activeImageIndex[product.id]]}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg"
              />
              <button
                className="absolute top-1/2 left-2"
                onClick={() => handleSwitchImages(product.id)}
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                className="absolute top-1/2 right-2"
                onClick={() => handleSwitchImages(product.id)}
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <div className="flex mt-4">
                {product.images.map((_, index) => (
                  <ImageIndicator
                    key={index}
                    isActive={index === activeImageIndex[product.id]}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mt-2">
              {product.name}
            </h3>
            <p className="text-gray-700 mt-1">${product.price}</p>
            <button
              className="border-white border-2 mt-4 items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 md:text-base"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-medium text-gray-800">Your Cart</h2>
          <ul className="list-disc ml-4 mt-4">
            {cart.map((product) => (
              <li key={product.id} className="text-gray-700">
                {product.name} - ${product.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <button
            onClick={() => cartCheck()}
            className="border-white border-2 mt-4 items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 md:text-base"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => setCart([])}
            className="border-white border-2 mt-4 items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 md:text-base"
          >
            Clear Cart
          </button>
        </div>
      )}
    </main>
  );
}

function ImageIndicator({ isActive }: any) {
  return (
    <span
      className={`h-3 w-3 rounded-full ${
        isActive ? "bg-blue-500" : "bg-gray-400"
      }`}
    />
  );
}
