"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatSocketService = void 0;
// Singleton class
class ChatSocketService {
    constructor() {
        this.userSocketByConnection = {};
    }
    static getInstance() {
        if (!ChatSocketService.instance) {
            ChatSocketService.instance = new ChatSocketService();
        }
        return ChatSocketService.instance;
    }
    setUserSocketById(socket, userId) {
        socket.userId = userId;
        this.userSocketByConnection[userId] = socket;
    }
    sendMessageToRelevantUser(message) {
        const receiverSocket = this.userSocketByConnection[message.receiver];
        if (receiverSocket) {
            receiverSocket.emit("newmsg", message);
        }
    }
}
exports.ChatSocketService = ChatSocketService;
//# sourceMappingURL=message.socket.js.map