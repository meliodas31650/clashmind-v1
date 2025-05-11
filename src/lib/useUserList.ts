"use client"

import { useEffect, useState } from "react"

export function useUserList(userId: string) {
  const [users, setUsers] = useState<string[]>([])

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000")

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "connect", userId }))
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.type === "userList") {
        setUsers(data.users.filter((id: string) => id !== userId))
      }
    }

    return () => {
      socket.send(JSON.stringify({ type: "disconnect", userId }))
      socket.close()
    }
  }, [userId])

  return users
}
