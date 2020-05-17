import * as mongoose from "mongoose";

export interface IConversation extends mongoose.Document {
  participants: string[];
  messages?: string[];
}

const ConversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
});

export const Conversation = mongoose.model<IConversation>(
  "Conversation",
  ConversationSchema
);
