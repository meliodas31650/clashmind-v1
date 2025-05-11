// src/lib/ws.ts

let socket: WebSocket | null = null

export function connectWebSocket() {
  if (socket && socket.readyState !== WebSocket.CLOSED) {
    console.log("🧠 WebSocket déjà connecté.")
    return socket
  }

  socket = new WebSocket("ws://localhost:4000")

  socket.onopen = () => {
    console.log("✅ Connecté au serveur WebSocket")
  }

  socket.onmessage = (event) => {
    console.log("📩 Message reçu du serveur :", event.data)
  }

  socket.onerror = (error) => {
    console.error("❌ Erreur WebSocket :", error)
  }

  socket.onclose = () => {
    console.warn("🔌 WebSocket déconnecté.")
    socket = null
  }

  return socket
}
