import { IChatMessageService } from '../../domain/interfaces/services';

// TODO: Find a better way to avoid sharing the mock
const fetchMessageMock = jest.fn();

const MockChatMessageService = function (this: IChatMessageService) {
  this.fetchMessagesForUser = fetchMessageMock;
};

export default MockChatMessageService;
