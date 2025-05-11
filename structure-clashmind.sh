#!/bin/bash

echo "📁 Création de la structure ClashMind..."

# FRONTEND
mkdir -p src/app
mkdir -p src/components/Sidebar
mkdir -p src/components/ChatGlobal
mkdir -p src/components/ChatPrive
mkdir -p src/components/AfficheJeux
mkdir -p src/styles
mkdir -p src/types

# BACKEND
mkdir -p src/server/ws
mkdir -p src/server/api
mkdir -p src/lib
mkdir -p src/config

# PRISMA + .env
mkdir -p prisma
touch prisma/schema.prisma
touch .env

# FICHIERS DE BASE
touch src/styles/global.css
touch src/types/index.ts
touch src/config/index.ts
touch src/lib/utils.ts
touch src/server/ws/server.ts
touch src/server/api/hello.ts

echo "✅ Structure ClashMind créée avec succès."
