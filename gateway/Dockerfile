FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./ 
COPY nest-cli.json ./ 
RUN npm ci
COPY src ./src
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]  

# No need for Prisma-related files
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main.js"]