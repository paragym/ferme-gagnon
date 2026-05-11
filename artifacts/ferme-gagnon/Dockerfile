FROM node:22-slim

# Install pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace-level manifests and lockfile first for better layer caching
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy all workspace package manifests so pnpm can resolve the dependency graph
COPY artifacts/ferme-gagnon/package.json ./artifacts/ferme-gagnon/package.json

# Ensure the preinstall script recognizes pnpm as the package manager
ENV npm_config_user_agent="pnpm/9.0.0 npm/? node/22.22.2"

# Install all workspace dependencies (frozen lockfile for reproducibility)
RUN pnpm install --frozen-lockfile

# Copy the rest of the monorepo source
COPY . .

# Build the ferme-gagnon frontend
RUN pnpm --filter @workspace/ferme-gagnon run build

EXPOSE 5173

ENV PORT=5173

CMD ["pnpm", "--filter", "@workspace/ferme-gagnon", "run", "serve"]
