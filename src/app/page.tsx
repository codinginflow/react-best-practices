"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      console.log("key pressed", e.key);
    }

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <div className="p-4">
      <p>Check the console for logs</p>
    </div>
  );
}

function connect() {
  console.log("connecting...");
  console.log("connected");
}

function disconnect() {
  console.log("disconnecting...");
  console.log("disconnected");
}
