#!/bin/sh
set -e

echo "→ Generating Prisma client..."
npx prisma generate

echo "→ Checking for migrations..."
if [ -f "prisma/schema.prisma" ]; then
  echo "→ Deploying migrations..."
  npx prisma migrate deploy
fi

echo "→ Migration process completed"