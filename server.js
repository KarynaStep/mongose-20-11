require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { DOMAIN, MONGO_DB, MONGO_PORT } = require("./constants");

mongoose
  // .connect(`mongodb://${DOMAIN}:${MONGO_PORT}/${MONGO_DB}`)
  .connect(process.env.DB_MONGO)
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("server started at port = ", port);
});
