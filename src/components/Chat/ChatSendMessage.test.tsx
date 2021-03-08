import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithThemeProvider } from '../../../test-utils';
import { ChatSendMessage } from './ChatSendMessage';

describe('ChatSendMessage', () => {
  it('renders correctly', () => {
    const messageSentMock = jest.fn();
    const { container } = renderWithThemeProvider(
      <ChatSendMessage onMessageSent={messageSentMock} />
    );

    expect(container).toMatchSnapshot();
  });

  it('calls message sent handler when chat message is sent', async () => {
    const messageSentMock = jest.fn();
    const { getByRole, getByPlaceholderText } = renderWithThemeProvider(
      <ChatSendMessage onMessageSent={messageSentMock} />
    );

    const messageInput = getByPlaceholderText(/Send a message/);
    const sendBtn = getByRole('button');

    userEvent.type(messageInput, 'Hello, World!');
    userEvent.click(sendBtn);

    expect(messageSentMock).toHaveBeenCalledWith('Hello, World!');
  });
});
