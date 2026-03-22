const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps CI/CD Pipeline is Working 🚀");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});