"use client";

import { useToast } from "./ToastProvider";

export default function Home() {
  const { showToast } = useToast();

  return (
    <main className="p-4 flex justify-center gap-1">
      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={() => showToast("hello world")}
      >
        Show toast
      </button>
    </main>
  );
}
