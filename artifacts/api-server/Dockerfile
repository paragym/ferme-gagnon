FROM node:22-slim

# Enable corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace manifests and lockfile first for better layer caching
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy all workspace package manifests so pnpm can resolve the workspace graph
COPY lib/api-zod/package.json ./lib/api-zod/
COPY lib/db/package.json ./lib/db/
COPY artifacts/api-server/package.json ./artifacts/api-server/

# Install all dependencies (including workspace packages)
RUN pnpm install --frozen-lockfile

# Copy the full source for every package the api-server depends on
COPY lib/api-zod/ ./lib/api-zod/
COPY lib/db/ ./lib/db/
COPY artifacts/api-server/ ./artifacts/api-server/

# Build the api-server
RUN pnpm --filter @workspace/api-server run build

WORKDIR /app/artifacts/api-server

EXPOSE 3000

ENV PORT=3000

CMD ["pnpm", "run", "start"]
