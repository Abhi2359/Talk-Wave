require("dotenv").config();
const express = require("express");
const chats = require("./data/data");
const colors = require("colors");
const dbConnection = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middlewares/errrorMiddleware");
dbConnection();
const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);
console.log("port", process.env.PORT);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.yellow.bold);
});
