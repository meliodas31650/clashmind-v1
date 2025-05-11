"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const menu = [
    { name: "CORTEX ARENA", href: "/" },
    { name: "MY ACCOUNT", href: "/account" },
    { name: "RULES AND GAMES", href: "/rules" },
    { name: "SPARKS MARKET", href: "/market" },
    { name: "NEURONS LEAGUE", href: "/league" },
    { name: "EVENTS", href: "/events" }
  ]

  return (
    <aside className="w-64 min-h-screen bg-clash-card text-white px-4 py-6 border-r border-clash-border flex flex-col font-orbitron">
      {/* Logo + titre */}
      <div className="flex flex-col items-center mb-10">
        <img src="/images/logo.jpg" alt="ClashMind" className="w-20 h-20 mb-3 rounded-xl shadow-lg" />
        <div className="text-xl font-bold text-clash-highlight tracking-wide">CLASHMIND</div>
        <span className="text-xs text-gray-400">PERFORMANCE GAMING APP</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menu.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <Link key={index} href={item.href}>
              <div
                className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-purple-700 text-white font-bold border-l-4 border-clash-highlight"
                    : "hover:bg-purple-800 text-gray-300"
                }`}
              >
                {item.name}
              </div>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
