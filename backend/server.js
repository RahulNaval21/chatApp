const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
  console.log(req.params.id);
});

const PORT = 4006 || process.env.PORT;
app.listen(PORT, console.log(`server started on port  ${PORT}`.yellow.bold));
