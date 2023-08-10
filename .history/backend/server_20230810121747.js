require("dotenv").config();
const express = require("express");
const chats = require("./data/data");
const app = express();

app.get("/", (req, res) => {
    const response = chats.map((chat) => {
    return chat.users;
  });

  res.send(response);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const port  = process.env.PORT;
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
      });