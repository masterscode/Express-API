const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 5100;

const httpServer = http.createServer(app);
httpServer.listen(PORT);
