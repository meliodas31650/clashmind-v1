"use client"

import { useUserList } from "@/lib/useUserList"

export default function UserList() {
  const userId = "Paul" // 🔁 à remplacer par l'ID du joueur connecté
  const users = useUserList(userId)

  return (
    <div className="p-4 bg-clash-card rounded-xl shadow border border-clash-border min-w-[250px]">
      <h2 className="text-lg font-bold text-clash-highlight mb-2">👥 En ligne</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user} className="flex justify-between items-center text-white">
            <span>{user}</span>
            <button className="text-xs text-purple-400 hover:underline">➕ Ajouter</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
