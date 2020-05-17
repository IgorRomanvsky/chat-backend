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
exports.MessageController = void 0;
const message_schema_1 = require("../schemas/message.schema");
class MessageController {
    constructor() { }
    createNewMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMessage = new message_schema_1.Message({
                sender: message.sender,
                receiver: message.receiver,
                text: message.text,
                conversationId: message.conversationId,
            });
            return yield newMessage.save();
        });
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map