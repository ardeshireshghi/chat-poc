import { IMessageResponseItem, mockMessages } from '../data/messages';
import { IChatMessageRepository } from '../domain/interfaces/repositories';
import { IMessage } from '../domain/models/message';
import { IUser } from '../domain/models/user';

export class ChatMessageRepository implements IChatMessageRepository {
  async findMessagesByUserId(userId: IUser['id']): Promise<IMessage[]> {
    return mockMessages.messages.map(this._mapToDomain);
  }

  _mapToDomain(message: IMessageResponseItem): IMessage {
    return {
      ...message,
      createdAt: new Date(message.createdAt)
    };
  }
}
