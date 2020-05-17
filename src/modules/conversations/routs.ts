import * as express from "express";
import { ConversationController } from "./controllers/conversations.controller";
import { IConversation } from "./schemas/conversation.schema";

export default [
  {
    path: "/api/conversations/:userToChatWithId",
    method: "get",
    handler: [
      async (req: express.Request, res: express.Response) => {
        try {
          // Since were not using JWT token that contains the user information.
          // We adding it manually to the header in the frontend
          const userAid: string = req.params.userToChatWithId;
          const userBid: string = req.headers["current-user-id"] as string;
          const conversationsController = new ConversationController(
            userAid,
            userBid
          );
          const conversation: IConversation = await conversationsController.getConversationBetweenTwoUsers();
          res.status(200).send(conversation);
        } catch (error) {
          res.status(500).send(error);
        }
      },
    ],
  },
];
