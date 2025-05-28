import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export const createServer = () => {
  const server = new McpServer(
    {
      name: "my-first-mcp",
      version: "1.0.0",
    },
    {
      capabilities: {
        resources: {},
        tools: {},
        prompts: {},
      },
    }
  )

  server.resource(
    "echo",
    new ResourceTemplate("echo://{message}", { list: undefined }),
    async (uri, { message }) => ({
      contents: [
        {
          uri: uri.href,
          text: `Resource echo: ${message}`,
        },
      ],
    })
  )

  server.tool("echo", { message: z.string() }, async ({ message }) => ({
    content: [{ type: "text", text: `Tool echo: ${message}` }],
  }))

  // Simple tool with parameters
  server.tool(
    "calculate-bmi",
    {
      weightKg: z.number(),
      heightM: z.number(),
    },
    async ({ weightKg, heightM }) => ({
      content: [
        {
          type: "text",
          text: String(weightKg / (heightM * heightM)),
        },
      ],
    })
  )

  // Async tool with external API call
  server.tool("fetch-weather", { city: z.string() }, async ({ city }) => {
    const response = await fetch(`https://api.weather.com/${city}`)
    const data = await response.text()
    return {
      content: [{ type: "text", text: data }],
    }
  })

  server.prompt("echo", { message: z.string() }, ({ message }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Please process this message: ${message}`,
        },
      },
    ],
  }))

  return { server }
}
