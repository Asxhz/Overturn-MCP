import { MCPServer } from "mcp-use/server";

import { registerServerHandlers } from "./register.js";

export function createServer(): MCPServer {
  const server = new MCPServer({
    name: "hicda-mcp-server",
    title: "Health Insurance Claim Denial Analyzer",
    version: "1.0.0",
    description:
      "MCP server for denial PDF extraction, denial code interpretation, appeal draft generation, and the Overturn dashboard widget for Claude/Manufact.",
    host: "0.0.0.0",
  });

  registerServerHandlers(server);
  return server;
}
