"use client"

import { useState } from "react"

const onlineUsers = ["paul", "sarah", "enzo"]
const allUsers = ["paul", "sarah", "enzo", "claire", "neo", "alice", "bob"]

export default function UserList() {
  const [users] = useState(allUsers)

  return (
    <div className="p-4 bg-gray-900 rounded text-white w-64 h-[420px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-3">🧑‍🤝‍🧑 Utilisateurs</h2>

      <div className="mb-2 text-green-400 font-semibold text-sm">En ligne</div>
      <ul className="mb-4 space-y-2">
        {onlineUsers.map((user, index) => (
          <li key={index} className="flex items-center gap-2 bg-gray-800 p-2 rounded">
            <img
              src={`https://ui-avatars.com/api/?name=${user}&background=4f46e5&color=fff&size=32`}
              alt={user}
              className="w-8 h-8 rounded-full"
            />
            <span className="flex-1">{user}</span>
            <button className="text-sm bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded">
              Défier
            </button>
          </li>
        ))}
      </ul>

      <div className="text-gray-400 font-semibold text-sm">Autres</div>
      <ul className="space-y-2">
        {users
          .filter((user) => !onlineUsers.includes(user))
          .map((user, index) => (
            <li key={index} className="flex items-center gap-2 bg-gray-800 p-2 rounded">
              <img
                src={`https://ui-avatars.com/api/?name=${user}&background=1f2937&color=9ca3af&size=32`}
                alt={user}
                className="w-8 h-8 rounded-full"
              />
              <span className="flex-1 text-gray-400">{user}</span>
              <button className="text-sm bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded cursor-not-allowed">
                Hors ligne
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
