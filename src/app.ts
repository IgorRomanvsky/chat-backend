import { ChatSocketService } from "./modules/messages/message.socket";
import { setRouts } from "./utils/methods/set-routs";
import * as bodyParser from "body-parser";
import socketIo from "socket.io";
import serveStatic from "serve-static";
import routes from "./modules/index";
import mongoose from "mongoose";
import express from "express";
import http from "http";
const chatService = ChatSocketService.getInstance();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const io = socketIo(server);

io.on("connection", (socket: any) => {
  socket.on("userid", (userId: string) => {
    chatService.setUserSocketById(socket, userId);
  });
});

app.use(bodyParser.json({ limit: "500mb" }));
mongoose
  .connect(
    "mongodb+srv://igor:igor123@cluster0-oac4l.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to db");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// app.use(serveStatic(__dirname + "/frontend"));
setRouts(routes, app);
server.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
