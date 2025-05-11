// src/server/ws/server.ts
import { WebSocketServer } from 'ws'
import { createServer } from 'http'

const server = createServer()
const wss = new WebSocketServer({ server })
const users = new Map()

wss.on('connection', (ws) => {
  let userId = null

  ws.on('message', (data) => {
    try {
      const parsed = JSON.parse(data.toString())

      // Enregistrement de l'utilisateur
      if (parsed.type === 'connect') {
        userId = parsed.userId
        users.set(userId, ws)
        broadcastUserList()
      }

      // Déconnexion
      if (parsed.type === 'disconnect') {
        users.delete(userId)
        broadcastUserList()
      }
    } catch (err) {
      console.error('WebSocket error:', err)
    }
  })

  ws.on('close', () => {
    if (userId) {
      users.delete(userId)
      broadcastUserList()
    }
  })
})

function broadcastUserList() {
  const userList = Array.from(users.keys())
  const message = JSON.stringify({ type: 'userList', users: userList })

  users.forEach((ws) => {
    ws.send(message)
  })
}

server.listen(4000, () => {
  console.log('🧠 Serveur WebSocket ClashMind en écoute sur ws://localhost:4000')
})
