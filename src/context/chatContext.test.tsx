import React, { useEffect } from 'react';
import { render, waitFor } from '../../test-utils';

import { IMessage, Message } from '../domain/models/message';
import { useChatMessages, ChatDataProvider } from './chatContext';

const ChatContextConsumer = () => {
  const { messages, saveNewMessage } = useChatMessages();

  useEffect(() => {
    saveNewMessage('new message');
  }, []);

  return messages.length ? <>{messages[0].text}</> : null;
};

describe('chatContext', () => {
  test('ChatContextConsumer shows value from provider', async () => {
    const mockMessage: IMessage = new Message('some message', {
      id: 1,
      name: 'Jane'
    });

    const { getByText } = render(
      <ChatDataProvider value={{ messages: [mockMessage] }}>
        <ChatContextConsumer />
      </ChatDataProvider>
    );
    await waitFor(() => expect(getByText(/some message/)).toBeInTheDocument());
  });

  test('ChatContextConsumer saves and then shows a new chat message', async () => {
    const { getByText } = render(
      <ChatDataProvider>
        <ChatContextConsumer />
      </ChatDataProvider>
    );
    await waitFor(() => expect(getByText(/new message/)).toBeInTheDocument());
  });
});
