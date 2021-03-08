import React from 'react';
import styled from 'styled-components';
import { IMessage } from '../../domain/models/message';
import { Theme } from '../../styleguide/index.d';
import { breakpoints } from '../../styleguide/theme';
import { normalSpacing } from '../../styleguide/utils';
import Avatar from './Avatar';

interface ChatMessageContainerProps {
  align: 'left' | 'right';
  theme: Theme;
}

const MessageText = styled.div`
  padding: ${normalSpacing};
  background-color: ${({ theme }) => theme.colors.chatMessage.default.bg};
  color: ${({ theme }) => theme.colors.chatMessage.default.text};
  border-radius: 10px;
  font-size: clamp(0.85rem, calc(0.5rem + 1vw), 1rem);
  flex-basis: 250px;
  flex-grow: 1;

  @media (min-width: ${breakpoints.MOBILE_LARGE}) {
    flex-grow: 0;
  }
`;

const UserMessageText = styled(MessageText)`
  background-color: ${({ theme }) => theme.colors.chatMessage.user.bg};
  color: ${({ theme }) => theme.colors.chatMessage.user.text};
`;

const ChatMessageContainer = styled.div`
  display: flex;
  gap: ${normalSpacing};
  margin-bottom: ${normalSpacing};
  flex-direction: ${(props: ChatMessageContainerProps) =>
    props.align === 'right' ? 'row-reverse' : 'row'};
`;

const ChatMessageItem = ({ message, isUser, ...rest }: { message: IMessage; isUser: boolean }) => {
  const { sender } = message;
  const MessageTextComponent = isUser ? UserMessageText : MessageText;

  return (
    <ChatMessageContainer align={isUser ? 'right' : 'left'} {...rest}>
      <Avatar bgColor={isUser ? 'primary' : 'secondary'} name={sender.name} />
      <MessageTextComponent>{message.text}</MessageTextComponent>
    </ChatMessageContainer>
  );
};
export default ChatMessageItem;
