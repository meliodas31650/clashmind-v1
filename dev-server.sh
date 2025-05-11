*#!/bin/bash

PORT=4000

echo "🧪 Vérification du port $PORT..."

PID=$(lsof -ti :$PORT)

if [ -n "$PID" ]; then
  echo "⚠️ Port $PORT déjà utilisé par PID $PID, arrêt du processus..."
  kill -9 $PID
  echo "✅ Port libéré."
fi

echo "🚀 Démarrage du serveur WebSocket ClashMind..."
npx tsx src/server/ws/server.ts

