import { ChatSocketService } from "./modules/messages/message.socket";
import { setRouts } from "./utils/methods/set-routs";
import * as bodyParser from "body-parser";
import socketIo from "socket.io";
import path from "path";
import serveStatic from "serve-static";
import routes from "./modules/index";
import mongoose from "mongoose";
import express from "express";
import http from "http";
const chatService = ChatSocketService.getInstance();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json({ limit: "500mb" }));
app.use("/", express.static(path.join(__dirname, "frontend")));
const io = socketIo(server);

io.on("connection", (socket: any) => {
  socket.on("userid", (userId: string) => {
    chatService.setUserSocketById(socket, userId);
  });
});

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

setRouts(routes, app);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

server.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
