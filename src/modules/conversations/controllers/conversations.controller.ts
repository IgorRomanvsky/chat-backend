import { Conversation, IConversation } from "../schemas/conversation.schema";
import { IMessage } from "../../../modules/messages/schemas/message.schema";
export class ConversationController {
  constructor(private userAId?: string, private userBId?: string) {}

  public async getConversationBetweenTwoUsers(): Promise<IConversation | null> {
    const allConversation: IConversation[] = await Conversation.find();
    const foundConversation: any = await this.checkIfConversationAlreadyExists(
      allConversation
    );
    return await Conversation.findOne({ _id: foundConversation._id }).populate(
      "messages"
    );
  }

  // Check if there a conversation between two users exists
  private async checkIfConversationAlreadyExists(
    allConversations: IConversation[]
  ): Promise<IConversation> {
    let conversationToReturn: IConversation;
    allConversations.forEach((conversation: IConversation) => {
      const participants: string[] = conversation.participants;
      if (this.conversationCheckerHelper(participants)) {
        conversationToReturn = conversation;
      }
    });
    if (conversationToReturn) {
      return conversationToReturn;
    } else {
      return await this.createNewConversation();
    }
  }

  private conversationCheckerHelper(participants: string[]): boolean {
    if (
      participants.includes(this.userAId) &&
      participants.includes(this.userBId)
    ) {
      return true;
    } else {
      return false;
    }
  }

  private async createNewConversation(): Promise<IConversation> {
    const newConversation: IConversation = new Conversation({
      participants: [this.userAId, this.userBId],
    });
    return await newConversation.save();
  }

  public async addMessageToConversation(
    message: IMessage
  ): Promise<IConversation> {
    return await Conversation.findByIdAndUpdate(
      { _id: message.conversationId },
      { $push: { messages: message._id } }
    );
  }
}
