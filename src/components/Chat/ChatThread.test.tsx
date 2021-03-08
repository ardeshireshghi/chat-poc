import React from 'react';

import { renderWithAllProviders, waitFor } from '../../../test-utils';
import { ChatThread } from './ChatThread';

import ChatMessageService from '../../services/ChatMessageService';
import { IMessage } from '../../domain/models/message';
import { ChatMessageRepository } from '../../infrastructure/ChatMessageRepository';

jest.mock('../../services/ChatMessageService');

const mockMessage: IMessage = {
  id: 1,
  text: 'some message text',
  createdAt: new Date(),
  sender: {
    id: 1,
    name: 'John'
  }
};

describe('ChatThread', () => {
  let service: ChatMessageService;

  beforeEach(() => {
    service = new ChatMessageService(new ChatMessageRepository());
    (service.fetchMessagesForUser as jest.Mock).mockResolvedValue([mockMessage]);
  });

  afterEach(() => {
    (service.fetchMessagesForUser as jest.Mock).mockReset();
  });

  it('renders messages', async () => {
    const { getAllByTestId } = renderWithAllProviders(<ChatThread />);

    await waitFor(() => expect(getAllByTestId('chat-thread-message')[0]).toBeInTheDocument());
  });

  it('renders message with correct text', async () => {
    const { getByText } = renderWithAllProviders(<ChatThread />);

    await waitFor(() => expect(getByText('some message text')).toBeInTheDocument());
  });

  it('scrolls to the end of messages', async () => {
    const { getByTestId } = renderWithAllProviders(<ChatThread />);

    await waitFor(() => expect(getByTestId('chat-message-list').scrollTo).toHaveBeenCalledTimes(1));
  });

  it('does not show messages when empty', async () => {
    (service.fetchMessagesForUser as jest.Mock).mockResolvedValue([]);
    const { queryByTestId } = renderWithAllProviders(<ChatThread />);

    await waitFor(() => expect(queryByTestId('chat-thread-message')).not.toBeInTheDocument());
  });
});
