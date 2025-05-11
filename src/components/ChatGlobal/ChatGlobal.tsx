"use client"

import { useState } from "react"
import { useWebSocket } from "@/lib/useWebSocket"

export default function ChatGlobal() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const { sendMessage } = useWebSocket((incoming) => {
    setMessages((prev) => [...prev, incoming])
  })

  const handleSend = () => {
    if (message.trim() === "") return
    sendMessage(message)
    setMessage("")
  }

  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-md border border-clash-border w-full">
      <h2 className="text-2xl font-bold text-clash-highlight mb-4 font-orbitron">💬 Chat Global</h2>
      <div className="h-64 overflow-y-auto bg-gray-800 p-2 mb-4 rounded-xl shadow-inner">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 text-white">{msg}</div>
        ))}
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          className="flex-1 p-2 rounded-xl bg-gray-700 text-white"
          placeholder="Écris ton message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-6 py-2 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all"
        >
          Envoyer
        </button>
      </div>
    </div>
  )
}
