import { setRouts } from "./utils/methods/set-routs";
import * as bodyParser from "body-parser";
import socketIo from "socket.io";
// import serveStatic from "serve-static";
import routes from "./modules/index";
import mongoose from "mongoose";
import express from "express";
import http from "http";
import { ChatSocketService } from "./modules/messages/message.socket";
const chatService = ChatSocketService.getInstance();
const app = express();
const server = http.createServer(app);
const PORT = 8000;

// const server = require("http").Server(app);
// const io = require("socket.io")(server);

const io = socketIo(server);

io.on("connection", (socket: any) => {
  socket.on("userid", (userId: string) => {
    chatService.setUserSocketById(socket, userId);
  });
});

app.use(bodyParser.json({ limit: "500mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, current-user-id"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Mongoose configuration
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

// router.use(serveStatic(__dirname + "/frontend"));
setRouts(routes, app);
server.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
