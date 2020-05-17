"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_controller_1 = require("./controllers/message.controller");
const conversations_controller_1 = require("../conversations/controllers/conversations.controller");
const message_socket_1 = require("./message.socket");
exports.default = [
    {
        path: "/api/messages",
        method: "post",
        handler: [
            (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                const message = {
                    sender: req.body.sender,
                    receiver: req.body.receiver,
                    text: req.body.text,
                    conversationId: req.body.conversationId,
                };
                try {
                    const conversationController = new conversations_controller_1.ConversationController();
                    const conversationsController = new message_controller_1.MessageController();
                    const socketService = message_socket_1.ChatSocketService.getInstance();
                    const createdMessage = yield conversationsController.createNewMessage(message);
                    const updatedConversation = yield conversationController.addMessageToConversation(createdMessage);
                    socketService.sendMessageToRelevantUser(createdMessage);
                    res.status(200).send(createdMessage);
                }
                catch (error) {
                    res.status(500).send(error);
                }
            }),
        ],
    },
];
//# sourceMappingURL=routs.js.map