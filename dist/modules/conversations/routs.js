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
const conversations_controller_1 = require("./controllers/conversations.controller");
exports.default = [
    {
        path: "/api/conversations/:userToChatWithId",
        method: "get",
        handler: [
            (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    // Since were not using JWT token that contains the user information.
                    // We adding it manually to the header in the frontend
                    const userAid = req.params.userToChatWithId;
                    const userBid = req.headers["current-user-id"];
                    const conversationsController = new conversations_controller_1.ConversationController(userAid, userBid);
                    const conversation = yield conversationsController.getConversationBetweenTwoUsers();
                    res.status(200).send(conversation);
                }
                catch (error) {
                    res.status(500).send(error);
                }
            }),
        ],
    },
];
//# sourceMappingURL=routs.js.map