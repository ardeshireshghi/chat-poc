import React from 'react';
import styled from 'styled-components';
import { ChatThread } from '../../components/Chat/ChatThread';
import { ChatDataProvider } from '../../context/chatContext';
import { normalSpacing } from '../../styleguide/utils';

const ChatTitle = styled.div`
  flex: 0 0 auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${normalSpacing};
  margin: ${normalSpacing} ${normalSpacing} 0 ${normalSpacing};
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ChatScreenContainer = styled.div`
  border-radius: ${({ theme }) => theme.chatScreen.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space.XS};
  box-shadow: rgba(0, 0, 0, 0.15) 1px 2px 4px 0;
  flex: 1 1 auto;
  height: 100%;

  @media all and (min-width: 480px) {
    flex: 0 1 auto;
  }
`;

export const ChatScreen: React.FC = () => {
  return (
    <ChatScreenContainer>
      <ChatTitle data-testid="chat-screen-title">Learning wasm</ChatTitle>
      <ChatDataProvider>
        <ChatThread />
      </ChatDataProvider>
    </ChatScreenContainer>
  );
};
