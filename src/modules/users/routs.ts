import { UserController } from "./controllers/user.controller";
import { IUser } from "./schemas/user.schema";
import * as express from "express";

export default [
  {
    path: "/api/user",
    method: "post",
    handler: [
      async (req: express.Request, res: express.Response) => {
        try {
          const createUserController = new UserController();
          const user: IUser = await createUserController.createNewUser(
            req.body.userName
          );
          res.status(200).send(user);
        } catch (error) {
          res.status(500).send(error);
        }
      },
    ],
  },
  {
    path: "/api/user",
    method: "get",
    handler: [
      async (req: express.Request, res: express.Response) => {
        try {
          const createUserController = new UserController();
          const users: IUser[] = await createUserController.getAllUsers();
          res.status(200).send(users);
        } catch (error) {
          res.status(500).send(error);
        }
      },
    ],
  },
];
