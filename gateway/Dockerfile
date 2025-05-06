# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# 1. Copy build files
COPY package*.json tsconfig*.json nest-cli.json ./
RUN npm ci

# 2. Copy scripts and source
COPY scripts ./scripts
COPY src ./src

# 3. Set permissions and build
RUN chmod +x scripts/wait-for-it.sh && \
    npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app

# 1. Install production deps
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev --ignore-scripts && \
    npm install prom-client

# 2. Copy only necessary artifacts
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/node_modules ./node_modules

# 3. Security setup
RUN apk add --no-cache tini curl && \
    addgroup -g 1001 appuser && \
    adduser -D -u 1001 -G appuser appuser && \
    chown -R appuser:appuser /app && \
    chmod 755 /app
    
USER appuser

ENTRYPOINT ["/sbin/tini", "--"]

# Runtime config
ENV NODE_ENV=production
ENV PORT=3000
ENV NATS_URL=nats://nats:4222
EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:3000/metrics || exit 1

CMD ["sh", "-c", \
     "./scripts/wait-for-it.sh nats:4222 --timeout=30 --strict && \
      node dist/main.js"]