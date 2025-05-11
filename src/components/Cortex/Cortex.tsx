"use client"

const jeux = [
  {
    title: "Forms Fights",
    image: "/images/forms-fights.png"
  },
  {
    title: "Gravity Four",
    image: "/images/gravity-four.png"
  },
  {
    title: "Calcul Rush",
    image: "/images/calcul-rush.png"
  },
  {
    title: "LogicLink",
    image: "/images/logiclink.png"
  },
  {
    title: "Memory Clash",
    image: "/images/memory-clash.png"
  }
]

export default function Cortex() {
  return (
    <div className="p-4 rounded-2xl bg-clash-background shadow-inner border border-clash-border w-full max-w-6xl mx-auto">
      <p className="text-xl text-clash-highlight mb-6 font-orbitron italic text-center">
        🧠 Train your Mind. Win Neurons and Make Profits.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {jeux.map((jeu, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-3 flex flex-col items-center text-center shadow border border-clash-border"
          >
            <img
              src={jeu.image}
              alt={jeu.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <div className="flex gap-2 w-full">
              <button className="w-1/2 py-2 text-sm font-semibold rounded bg-green-600 text-white hover:bg-green-700 transition-all">
                Clash
              </button>
              <button className="w-1/2 py-2 text-sm font-semibold rounded bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
                Rules & Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
