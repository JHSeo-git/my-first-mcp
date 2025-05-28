FROM oven/bun:1 as builder

WORKDIR /app

# Copy package files
COPY package.json ./
COPY bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy application code
COPY . .

# Build the application
RUN bun run build

# Command will be provided by smithery.yaml
CMD ["node", "dist/index.js"]
