const express = require("express");
const cors = require("cors");
const { port } = require("./configs/server-config");
const { connectToDatabase } = require("./configs/database-config");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const startServer = () => {
  app.listen(port, () => {
    connectToDatabase();
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
