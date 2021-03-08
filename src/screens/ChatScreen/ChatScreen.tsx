import React from 'react';
import styled from 'styled-components';
import { ChatThread } from '../../components/Chat/ChatThread';
import { ChatDataProvider } from '../../context/chatContext';

const ChatTitle = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.header};
`;

const ChatScreenContainer = styled.div`
  border-radius: ${({ theme }) => theme.chatScreen.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.space.M};
  gap: ${({ theme }) => theme.space.M};
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
