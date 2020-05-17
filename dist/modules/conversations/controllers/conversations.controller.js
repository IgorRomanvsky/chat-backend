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
exports.ConversationController = void 0;
const conversation_schema_1 = require("../schemas/conversation.schema");
class ConversationController {
    constructor(userAId, userBId) {
        this.userAId = userAId;
        this.userBId = userBId;
    }
    getConversationBetweenTwoUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const allConversation = yield conversation_schema_1.Conversation.find();
            const foundConversation = yield this.checkIfConversationAlreadyExists(allConversation);
            return yield conversation_schema_1.Conversation.findOne({ _id: foundConversation._id }).populate("messages");
        });
    }
    // Check if there a conversation between two users exists
    checkIfConversationAlreadyExists(allConversations) {
        return __awaiter(this, void 0, void 0, function* () {
            let conversationToReturn;
            allConversations.forEach((conversation) => {
                const participants = conversation.participants;
                if (this.conversationCheckerHelper(participants)) {
                    conversationToReturn = conversation;
                }
            });
            if (conversationToReturn) {
                return conversationToReturn;
            }
            else {
                return yield this.createNewConversation();
            }
        });
    }
    conversationCheckerHelper(participants) {
        if (participants.includes(this.userAId) &&
            participants.includes(this.userBId)) {
            return true;
        }
        else {
            return false;
        }
    }
    createNewConversation() {
        return __awaiter(this, void 0, void 0, function* () {
            const newConversation = new conversation_schema_1.Conversation({
                participants: [this.userAId, this.userBId],
            });
            return yield newConversation.save();
        });
    }
    addMessageToConversation(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield conversation_schema_1.Conversation.findByIdAndUpdate({ _id: message.conversationId }, { $push: { messages: message._id } });
        });
    }
}
exports.ConversationController = ConversationController;
//# sourceMappingURL=conversations.controller.js.map