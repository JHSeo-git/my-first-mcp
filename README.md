# my-first-mcp

## Running MCP

### node

```json
{
  "mcpServers": {
    "my-first-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/your/dist/index.js"]
    }
  }
}
```

### docker

```json
{
  "mcpServers": {
    "my-first-mcp": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "my-first-mcp"]
    }
  }
}
```

## Runner

stdio

```bash
docker build -t my-first-mcp-stdio .
# docker build --platform linux/amd64 -t aoaiaiplayground.azurecr.io/mcp/my-first-mcp-stdio .
# docker buildx build --platform linux/amd64,linux/arm64 -t aoaiaiplayground.azurecr.io/mcp/my-first-mcp-stdio --push .
docker run -i --rm  my-first-mcp-stdio
```

stdio -> sse

```bash
docker build -t my-first-mcp-gateway -f Dockerfile.sse .
docker run --rm -p 8181:8000 my-first-mcp-gateway
```
