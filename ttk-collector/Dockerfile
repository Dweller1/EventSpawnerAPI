# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# 1. Copy package files
COPY package*.json ./
RUN npm ci

# 2. Copy schema and generate client
COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

# 3. Copy remaining files
COPY . .

# 4. Build application
RUN npm run build && \
    chmod +x scripts/wait-for-it.sh && \
    chmod +x scripts/prisma/migrate.sh && \
    chmod 755 src/metrics

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app

# Install production dependencies
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev && \
    npm install prom-client

# Copy only essential files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/prisma ./prisma

# Runtime setup
RUN apk add --no-cache tini curl && \
    addgroup -g 1001 appuser && \
    adduser -D -u 1001 -G appuser appuser && \
    chown -R appuser:appuser /app && \
    chmod 755 /app/src
    
USER appuser

ENTRYPOINT ["/sbin/tini", "--"]

ENV NODE_ENV=production
ENV PORT=3002
ENV DATABASE_URL=postgresql://admin:admin@postgres:5432/eventsdb
ENV NATS_URL=nats://nats:4222

EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:4002/metrics || exit 1

CMD ["sh", "-c", \
    "./scripts/wait-for-it.sh postgres:5432 --timeout=30 --strict -- \
     ./scripts/wait-for-it.sh nats:4222 --timeout=30 --strict -- \
     ./scripts/prisma/migrate.sh && \
     node dist/main.js"]