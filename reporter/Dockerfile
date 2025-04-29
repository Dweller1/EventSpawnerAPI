# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# 1. Copy dependency files first for caching
COPY package*.json ./
COPY prisma/schema.prisma ./prisma/

# 2. Install dependencies and generate Prisma client
RUN npm ci && npx prisma generate

# 3. Copy all source files including ZodPipe
COPY src ./src
COPY ZodPipe ./ZodPipe
COPY tsconfig*.json ./
COPY nest-cli.json ./

# 4. Build application
RUN npm run build && \
    chmod +x scripts/wait-for-it.sh

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app

# 1. Install production dependencies
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev

# 2. Copy only necessary production files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/prisma ./prisma

# 3. Runtime setup
RUN apk add --no-cache tini && \
    addgroup -g 1001 appuser && \
    adduser -D -u 1001 -G appuser appuser && \
    chown -R appuser:appuser /app
USER appuser

ENTRYPOINT ["/sbin/tini", "--"]

# Environment variables
ENV NODE_ENV=production
ENV PORT=4000
ENV DATABASE_URL=postgresql://admin:admin@postgres:5432/eventsdb
ENV NATS_URL=nats://nats:4222

EXPOSE $PORT

CMD ["sh", "-c", \
    "./scripts/wait-for-it.sh postgres:5432 --timeout=30 --strict -- \
     ./scripts/wait-for-it.sh nats:4222 --timeout=30 --strict -- \
     node dist/main.js"]