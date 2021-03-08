import React, { useEffect, useRef } from 'react';

import { useChatMessages } from '../../context/chatContext';
import ChatMessageList from './ChatMessageList';
import ChatMessageItem from './ChatMessageItem';
import useAuth from '../../hooks/auth';

export const ChatThread: React.FC = () => {
  const { messages } = useChatMessages();
  const chatMessageListRef = useRef<HTMLDivElement>(null);
  const { currentUser } = useAuth();
  const user = currentUser();

  useEffect(() => {
    if (chatMessageListRef && chatMessageListRef.current) {
      // Scroll to end of messages
      chatMessageListRef.current.scrollTo(0, chatMessageListRef.current.scrollHeight);
    }
  }, [chatMessageListRef, messages]);

  return (
    <>
      <ChatMessageList data-testid="chat-message-list" ref={chatMessageListRef}>
        {messages.map((message) => (
          <ChatMessageItem
            key={message.id}
            message={message}
            isUser={message.sender.id === user.id}
            data-testid="chat-thread-message"
          />
        ))}
      </ChatMessageList>
    </>
  );
};
