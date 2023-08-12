require("dotenv").config();
const express = require("express");
const chats = require("./data/data");
const colors  = require('colors')
const dbConnection = require("./config/db");

dbConnection();
const app = express();

app.get("/api/chat", (req, res) => {
   res.send(chats)
});


const port  = 5000;
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`.yellow.bold);
      });