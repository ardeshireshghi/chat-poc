import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { normalSpacing } from '../../styleguide/utils';
import TextInput from '../TextInput';
import Button from '../Button';

const ChatSendMessageForm = styled.form`
  display: flex;
  gap: ${normalSpacing};
  padding: ${normalSpacing};
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const SendButton = styled(Button)``;

interface ChatSendMessageProps {
  onMessageSent: (message: string) => void;
}
export const ChatSendMessage: React.FC<ChatSendMessageProps> = ({ onMessageSent }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (message) {
        onMessageSent(message);
        setMessage('');
      }
    },
    [message, onMessageSent]
  );

  return (
    <ChatSendMessageForm onSubmit={handleSubmit}>
      <TextInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Send a message..."
      ></TextInput>
      <SendButton>Send</SendButton>
    </ChatSendMessageForm>
  );
};
