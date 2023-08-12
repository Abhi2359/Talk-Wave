require("dotenv").config();
const express = require("express");
const chats = require("./data/data");
const colors  = require('colors')
const dbConnection = require("./config/db");
const userRoutes= require('./routes/userRoutes')
dbConnection();
const app = express();
app.use(express.json())

app.use("/api/user",userRoutes)


const port  = 5000;
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`.yellow.bold);
      });