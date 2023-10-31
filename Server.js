const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/TodoRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;
// app.use(express.json())
app.use(bodyParser());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongoDb");
  })
  .catch((err) => {
    console.log(err, "err");
  });

app.use(routes);
app.listen(PORT, () => {
  console.log("on 5000");
});
