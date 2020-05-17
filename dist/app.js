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
const message_socket_1 = require("./modules/messages/message.socket");
const set_routs_1 = require("./utils/methods/set-routs");
const bodyParser = __importStar(require("body-parser"));
const socket_io_1 = __importDefault(require("socket.io"));
const serve_static_1 = __importDefault(require("serve-static"));
const index_1 = __importDefault(require("./modules/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const chatService = message_socket_1.ChatSocketService.getInstance();
const app = express_1.default();
const server = https_1.default.createServer(app);
const PORT = process.env.PORT || 8000;
const io = socket_io_1.default(server);
io.on("connection", (socket) => {
    socket.on("userid", (userId) => {
        chatService.setUserSocketById(socket, userId);
    });
});
app.use(bodyParser.json({ limit: "500mb" }));
mongoose_1.default
    .connect("mongodb+srv://igor:igor123@cluster0-oac4l.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("Connected to db");
})
    .catch(() => {
    console.log("Connection failed");
});
app.use(serve_static_1.default(__dirname + "/frontend"));
set_routs_1.setRouts(index_1.default, app);
server.listen(PORT, () => {
    console.log("App is running on port " + PORT);
});
//# sourceMappingURL=app.js.map