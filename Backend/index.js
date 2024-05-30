const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", userRouter);

mongoose
  .connect("mongodb://localhost:27017/UserAuth")
  .then(() => {
    console.log("connected to db");
    app.listen(3001, () => {
      console.log("hello");
    });
  })
  .catch((e) => {
    console.log(e);
  });
