const express = require("express");
const PORT = 8080;

const app = express();

app.listen(PORT, (_) => {
  console.log("API server listening on PORT: " + PORT);
});
