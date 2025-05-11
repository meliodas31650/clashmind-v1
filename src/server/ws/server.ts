// src/server/ws/server.ts

import { createServer } from 'http'
import { WebSocketServer } from 'ws'

// Serveur HTTP de base (pour WebSocket)
const server = createServer()

// Serveur WebSocket attaché
const wss = new WebSocketServer({ server })

wss.on('connection', (ws) => {
  console.log('✅ Nouveau client connecté')

  ws.on('message', (message) => {
    console.log('📩 Message reçu:', message.toString())

    // Broadcast à tous les clients connectés
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(`🔁 Reçu: ${message}`)
      }
    })
  })

  ws.on('close', () => {
    console.log('❌ Client déconnecté')
  })
})

// Lancer le serveur sur le port 4000
server.listen(4000, () => {
  console.log('🧠 Serveur WebSocket ClashMind en écoute sur ws://localhost:4000')
})
