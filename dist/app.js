"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const set_routs_1 = require("./utils/methods/set-routs");
const bodyParser = __importStar(require("body-parser"));
const socket_io_1 = __importDefault(require("socket.io"));
// import serveStatic from "serve-static";
const index_1 = __importDefault(require("./modules/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const message_socket_1 = require("./modules/messages/message.socket");
const chatService = message_socket_1.ChatSocketService.getInstance();
const app = express_1.default();
const server = http_1.default.createServer(app);
const PORT = 8000;
// const server = require("http").Server(app);
// const io = require("socket.io")(server);
const io = socket_io_1.default(server);
io.on("connection", (socket) => {
    socket.on("userid", (userId) => {
        chatService.setUserSocketById(socket, userId);
    });
});
app.use(bodyParser.json({ limit: "500mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, current-user-id");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});
// Mongoose configuration
mongoose_1.default
    .connect("mongodb+srv://igor:igor123@cluster0-oac4l.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("Connected to db");
})
    .catch(() => {
    console.log("Connection failed");
});
// router.use(serveStatic(__dirname + "/frontend"));
set_routs_1.setRouts(index_1.default, app);
server.listen(PORT, () => {
    console.log("App is running on port " + PORT);
});
//# sourceMappingURL=app.js.map