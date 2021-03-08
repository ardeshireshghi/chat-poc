import { Message, IMessage } from '../domain/models/message';
import { ChatMessageRepository } from '../infrastructure/ChatMessageRepository';
import ChatMessageService from './ChatMessageService';

describe('ChatMessageService', () => {
  describe('#fetchMessagesForUser', () => {
    it('fetches messages for a given user', async () => {
      const messageRepo = new ChatMessageRepository();
      jest.spyOn(messageRepo, 'findMessagesByUserId').mockResolvedValueOnce([
        new Message('some message', {
          id: 1,
          name: 'bob'
        })
      ]);
      const service = new ChatMessageService(messageRepo);
      const messages: IMessage[] = await service.fetchMessagesForUser(1);

      expect(messages[0].text).toEqual('some message');
    });
  });
});
