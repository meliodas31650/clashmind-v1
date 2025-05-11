import Cortex from "@/components/Cortex/Cortex"
import Chat from "@/components/Chat/Chat"
import UserList from "@/components/UserList/UserList"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 p-4 min-h-screen bg-clash-background">
      {/* Cortex section */}
      <Cortex />

      {/* Main section with Chat and UserList */}
      <div className="flex flex-1 gap-6 mt-6">
        {/* Left columns (Chats) */}
        <div className="flex flex-col gap-4 flex-1">
          <Chat />
        </div>

        {/* Right column (UserList) */}
        <UserList />
      </div>
    </div>
  )
}
