import * as mongoose from "mongoose";

export interface IMessage extends mongoose.Document {
  sender: string;
  receiver: string;
  text: string;
  conversationId?: string;
}

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "Usermongoose." },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "Usermongoose." },
  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },

  text: {
    type: String,
    required: true,
  },
});

export const Message = mongoose.model<IMessage>("Message", MessageSchema);
