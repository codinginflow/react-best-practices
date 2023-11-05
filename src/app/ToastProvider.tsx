"use client";

import { createContext, useContext, useState } from "react";

interface ToastContext {
  showToast: (message: string) => void;
}

export const ToastContext = createContext<ToastContext | undefined>(undefined);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toastMessage, setToastMessage] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  function showToast(message: string) {
    setToastMessage(message);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setToastMessage("");
    }, 3000);

    setTimeoutId(newTimeoutId);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`fixed bottom-0 rounded m-3 right-0 p-4 bg-gray-800 text-white ${
          toastMessage ? "visible" : "invisible"
        }`}
      >
        {toastMessage}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
