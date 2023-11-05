/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let ignore = false;
    async function searchProducts() {
      const products = await fetchProducts(searchInput);
      if (!ignore) {
        setProducts(products);
      }
    }
    if (searchInput) {
      searchProducts();
    } else {
      setProducts([]);
    }

    return () => {
      ignore = true;
    };
  }, [searchInput]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search products..."
        className="border border-gray-300 rounded-md p-2 w-full mb-4 max-w-sm"
      />
      <div>
        {products.map((product) => (
          <div className="flex items-center mb-1" key={product.id}>
            <img
              className="w-10 h-10 rounded mr-4"
              src={product.thumbnail}
              alt="Product thumbnail"
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

async function fetchProducts(searchQuery: string): Promise<Product[]> {
  await randomDelay();
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchQuery}`
  );
  const data = await response.json();
  return data.products;
}

interface Product {
  id: string;
  title: string;
  thumbnail: string;
}

async function randomDelay() {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise((resolve) => setTimeout(resolve, delay));
}
