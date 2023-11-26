const express = require("express");

const { PORT } = require("../constants");
const router = require("../router");
const headersConfig = require("../middleware/headers");

const startServer = () => {
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(router);
  app.use(headersConfig);

  app.listen(PORT, () => console.log("Server is listening on port " + PORT));
};

module.exports = startServer;
