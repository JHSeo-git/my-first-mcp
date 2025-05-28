import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"

import { createServer } from "./create-server"

console.error("Starting server...")

async function main() {
  const { server } = await createServer()
  // stdio transport
  const transport = new StdioServerTransport()
  await server.connect(transport)

  process.on("SIGINT", async () => {
    await server.close()
    process.exit(0)
  })
}

main().catch((error) => {
  console.error("Error starting server: ", error)
  process.exit(1)
})
