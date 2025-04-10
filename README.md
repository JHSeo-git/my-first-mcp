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
