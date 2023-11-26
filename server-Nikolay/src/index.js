const express = require("express");

const app = express();

const { PORT } = require("./constants");

const router = require("./router");

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}/`);
});
