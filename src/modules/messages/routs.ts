import * as express from "express";
import { MessageController } from "./controllers/message.controller";
import { IMessage } from "./schemas/message.schema";
import { ConversationController } from "../conversations/controllers/conversations.controller";
import { ChatSocketService } from "./message.socket";
export default [
  {
    path: "/api/messages",
    method: "post",
    handler: [
      async (req: express.Request, res: express.Response) => {
        const message: any = {
          sender: req.body.sender,
          receiver: req.body.receiver,
          text: req.body.text,
          conversationId: req.body.conversationId,
        };
        try {
          const conversationController = new ConversationController();
          const conversationsController = new MessageController();
          const socketService = ChatSocketService.getInstance();
          const createdMessage: IMessage = await conversationsController.createNewMessage(
            message
          );
          const updatedConversation = await conversationController.addMessageToConversation(
            createdMessage
          );
          socketService.sendMessageToRelevantUser(createdMessage);
          res.status(200).send(createdMessage);
        } catch (error) {
          res.status(500).send(error);
        }
      },
    ],
  },
];
