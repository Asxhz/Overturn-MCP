import "dotenv/config";

import { createServer } from "./src/server/create-server.js";

const server = createServer();
await server.listen(parseInt(process.env.PORT || "3000"));
