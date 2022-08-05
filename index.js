const app = require("./app.js");
const http = require("http");
const serverConfig = require("./config/server.config");

const server = http.createServer(app);

const StartServer = () => {
  server.listen(serverConfig.PORT, () => {
    console.clear();
    console.log(`eShoppy ready on PORT: ${serverConfig.PORT}`);
  });
};

StartServer();
