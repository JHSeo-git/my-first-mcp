import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: "esm",
  platform: "node",
  outDir: "dist",
  name: "my-first-mcp",
  tsconfig: "tsconfig.json",
  clean: true,
  dts: true,
  treeshake: true,
})
