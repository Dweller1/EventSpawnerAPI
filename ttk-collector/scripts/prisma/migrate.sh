#!/bin/sh
if [ -f "prisma/schema.prisma" ]; then
  npx prisma migrate deploy
fi