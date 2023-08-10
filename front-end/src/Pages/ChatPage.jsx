import axios from "axios";
import React, { useState, useEffect } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    try {
      const {data} = await axios.get("/api/chat");
      setChats(data);
  console.log(typeof chats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
  
  <div className="chatName">
      {chats.map((chat)=>{
        return  <div key={chat._id}>{chat.chatName}</div>
      })}
  </div>
 
  );
};

export default ChatPage;
