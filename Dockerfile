ARG NODE_VERSION=20-slim

# Build phase
FROM node:$NODE_VERSION AS builder
WORKDIR /app

# Prepare node_modules
COPY ./ ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile


# Run phase
FROM node:$NODE_VERSION AS runner

LABEL org.opencontainers.image.source=https://github.com/gantrycd/frontend/
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

# Copy artifacts
CMD ["./start.sh"]
