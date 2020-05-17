import userRoutes from "../modules/users/routs";
import conversationRouts from "../modules/conversations/routs";
import messagesRoute from "../modules/messages/routs";
export default [...userRoutes, ...conversationRouts, ...messagesRoute];
