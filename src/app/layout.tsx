import "./globals.css"
import type { ReactNode } from "react"
import Sidebar from "@/components/Sidebar/Sidebar"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Chargement de la police Orbitron via Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-clash-background text-white font-orbitron min-h-screen">
        <div className="flex w-full min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
