import { IChatMessageRepository } from '../domain/interfaces/repositories';
import { IChatMessageService } from '../domain/interfaces/services';

import { IMessage } from '../domain/models/message';
import { IUser } from '../domain/models/user';

class ChatMessageService implements IChatMessageService {
  constructor(protected chatMessageRepository: IChatMessageRepository) {}

  async fetchMessagesForUser(userId: IUser['id']): Promise<IMessage[]> {
    return this.chatMessageRepository.findMessagesByUserId(userId);
  }
}

export default ChatMessageService;
