// src/lib/useWebSocket.ts

import { useEffect, useRef } from "react"

export function useWebSocket(onMessage: (data: string) => void) {
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000")
    socketRef.current = socket

    socket.onopen = () => {
      console.log("✅ WebSocket connecté")
    }

    socket.onmessage = (event) => {
      console.log("📩 Message reçu :", event.data)
      onMessage(event.data)
    }

    socket.onerror = (error) => {
      console.error("❌ Erreur WebSocket :", error)
    }

    socket.onclose = () => {
      console.warn("🔌 WebSocket fermé")
    }

    return () => {
      socket.close()
    }
  }, [onMessage])

  const sendMessage = (message: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(message)
    } else {
      console.warn("🕓 WebSocket pas encore prêt")
    }
  }

  return { sendMessage }
}
