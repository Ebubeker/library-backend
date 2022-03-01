const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const PORT = process.env.PORT || 4000;

console.log(process.env.URI_IDK);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());
console.log("");
mongoose
  .connect(process.env.URI_IDK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(PORT, () => {
      console.log("server opened at localhost:" + PORT);
    });
  });

app.use(cors());
app.use("/", require("./router/liber"));
app.use("/", require("./router/cupon"));

// app.get("/", (req, res) => {
//   res.send("working");
// });

// pass: 287crR4uTT77kmkA
