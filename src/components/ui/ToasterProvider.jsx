"use client"

import { Toaster } from "react-hot-toast"
export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#1B4332",
          color: "#fff",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
        },
        success: {
          iconTheme: { primary: "#40916C", secondary: "#fff" },
        },
      }}
    />
  )
}
