/* eslint-disable @next/next/no-img-element */
"use client";

import useSearchProducts from "@/hooks/useSearchProducts";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  const { products, loading, error } = useSearchProducts(searchInput);

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
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && (
          <p className="text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
        {!loading && !error && products?.length === 0 && (
          <p className="text-gray-500">No products found.</p>
        )}
        {products?.map((product) => (
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
