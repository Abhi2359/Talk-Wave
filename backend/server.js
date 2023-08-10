const express = require('express');
const chats = require('./data/data');
const app =express();

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})

app.get('/',(req,res)=>{
  const response = chats.map((chat)=>{
    return chat.users
  })
  res.send(response)
})