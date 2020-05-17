import { Schema, model, Document, Mongoose } from "mongoose";
import * as mongoose from "mongoose";
import { IConversation } from "../../../modules/conversations/schemas/conversation.schema";

export interface IUser extends mongoose.Document {
  _id: string;
  userName: string;
  conversations?: IConversation[];
}

export const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  somethingElse: Number,
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
