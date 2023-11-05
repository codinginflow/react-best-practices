"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  const vowelsMemoized = useMemo(() => {
    const chars = fullName.split("");
    const vowels = chars.filter((char) => "aeiou".includes(char));
    return vowels
  }, [fullName])

  return (
    <main className="p-4 flex flex-col gap-1">
      <p>Full name: {fullName}</p>
      <p>Vowels: {vowelsMemoized.join(", ")}</p>
      <input
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border p-1 rounded w-40"
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border p-1 rounded w-40"
      />
    </main>
  );
}
