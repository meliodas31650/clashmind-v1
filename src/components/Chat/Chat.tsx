"use client"

import { useState } from "react"
import ChatGlobal from "@/components/ChatGlobal/ChatGlobal"
import ChatPrive from "@/components/ChatPrive/ChatPrive"

export default function Chat() {
  const [activeTab, setActiveTab] = useState("global") // Default tab is "global"

  return (
    <div className="p-6 bg-clash-card rounded-xl shadow-md border border-clash-border w-full">
      {/* Switch entre Chat Global et Chat Privé */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab("global")}
          className={`w-1/2 py-3 text-lg font-semibold rounded-l-lg transition-all duration-300 ease-in-out ${
            activeTab === "global"
              ? "bg-purple-600 text-white shadow-xl"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Chat Global
        </button>
        <button
          onClick={() => setActiveTab("private")}
          className={`w-1/2 py-3 text-lg font-semibold rounded-r-lg transition-all duration-300 ease-in-out ${
            activeTab === "private"
              ? "bg-purple-600 text-white shadow-xl"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Chat Privé
        </button>
      </div>

      {/* Affichage dynamique entre Chat Global et Chat Privé */}
      <div className="transition-all duration-500">
        {activeTab === "global" ? <ChatGlobal /> : <ChatPrive />}
      </div>
    </div>
  )
}
