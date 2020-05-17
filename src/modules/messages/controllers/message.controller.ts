import { IMessage, Message } from "../schemas/message.schema";

export class MessageController {
  private createdMessage: IMessage;
  constructor() {}

  public async createNewMessage(message: IMessage): Promise<IMessage> {
    const newMessage: IMessage = new Message({
      sender: message.sender,
      receiver: message.receiver,
      text: message.text,
      conversationId: message.conversationId,
    });
    return await newMessage.save();
  }
}
