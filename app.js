const express = require("express");
const postsRouter = require("./api/routes");

const app = express();
app.use(express.json());

app.use("/", postsRouter);

app.listen(8001, () => {
  console.log("The application is running on http://localhost:8001");
});
