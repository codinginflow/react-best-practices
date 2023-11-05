"use client";

import { useState } from "react";

const user = {
  name: "John Doe",
  age: 25,
  address: {
    street: "Main Street",
    number: 123,
    city: "New York",
    state: "NY",
  },
};

export default function Home() {
  const [showAddress, setShowAddress] = useState(false);

  return (
    <main className="p-4 space-y-1.5">
      <p>{user.name}</p>
      <p>{user.age}</p>
      {!showAddress && (
        <button
          className="border rounded bg-black text-white p-2"
          onClick={() => setShowAddress(true)}
        >
          Show Address
        </button>
      )}
      {showAddress && (
        <>
          <p>{user.address.street}</p>
          <p>{user.address.number}</p>
          <p>{user.address.city}</p>
          <p>{user.address.state}</p>
        </>
      )}
    </main>
  );
}
