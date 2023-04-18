const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./connectDB");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const aptRouter = require("./routes/aptRoutes");
const messageRouter = require("./routes/messageRoutes");
const subRouter = require("./routes/subRoutes");
const routeNotFound = require("./middleware/404");
const errorHandler = require("./middleware/errorHandler");
const { auth } = require("./middleware/auth");
const cors = require("cors");

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(userRouter);
app.use("/appointments", aptRouter);
app.use("/messages", messageRouter);
app.use(subRouter);
app.use(routeNotFound);
app.use(errorHandler);

const { MONGO_URI } = process.env;

connectDB(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Connected....");
    });
  })
  .catch((err) => console.log(err));
