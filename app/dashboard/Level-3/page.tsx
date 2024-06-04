"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    images: ["/re/flow.png", "/re/flow2.png"], // Add multiple images
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    images: ["/re/garden.png", "/re/garden2.png"], // Add multiple images
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    images: ["/re/house.png", "/re/house2.png"], // Add multiple images
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    images: ["/re/kroete.png", "/re/kroete2.png"], // Add multiple images
  },
  {
    id: 5,
    name: "Product 5",
    price: 59.99,
    images: ["/re/schlauch.png", "/re/schlauch2.png"], // Add multiple images
  },
  {
    id: 6,
    name: "Product 6",
    price: 69.99,
    images: ["/re/shroom.png", "/re/shroom2.png"], // Add multiple images
  },
];

export default function Page() {
  const [cart, setCart] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const handleNextImage = (productId) => {
    setActiveImageIndex((prevIndex) => (prevIndex[productId] + 1) % products.find((p) => p.id === productId).images.length);
  };

  const handlePreviousImage = (productId) => {
    setActiveImageIndex((prevIndex) => (prevIndex[productId] - 1 + products.find((p) => p.id === productId).images.length) % products.find((p) => p.id === productId).images.length);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <main className="flex min-h-screen flex-col p-6 select-none">
      <h1 className="text-3xl font-bold text-gray-800">Gartenshop</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="basis-1/3 flex flex-col items-center">
            <div className="relative">
              <Image
                src={product.images[activeImageIndex[product.id]]}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg"
              />
              <button className="absolute top-1/2 left-2" onClick={() => handlePreviousImage(product.id)}>
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button className="absolute top-1/2 right-2" onClick={() => handleNextImage(product.id)}>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <div className="flex mt-4">
                {product.images.map((_, index) => (
                  <ImageIndicator key={index} isActive={index === activeImageIndex[product.id]} />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mt-2">
              {product.name}
            </h3>
            <p className="text-gray-700 mt-1">
              ${product.price.toFixed(2)}
            </p>
            <button
              className="px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors mt-4"
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
          <button className="px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </main>
  );
}

function ImageIndicator({ isActive }) {
  return (
    <span
      className={`h-3 w-3 rounded-full ${
        isActive ? "bg-blue-500" : "bg-gray-400"
      }`}
    />
  );
}
