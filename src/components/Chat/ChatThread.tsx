import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { useChatMessages } from '../../context/chatContext';
import ChatMessageList from './ChatMessageList';
import ChatMessageItem from './ChatMessageItem';
import useAuth from '../../hooks/auth';
import { ChatSendMessage } from './ChatSendMessage';

export const ChatThread: React.FC = () => {
  const { messages, saveNewMessage } = useChatMessages();
  const [finishedInitialRender, setFinishedInitialRender] = useState(false);
  const chatMessageListRef = useRef<HTMLDivElement>(null);
  const { currentUser } = useAuth();
  const user = currentUser();

  useEffect(() => {
    if (messages.length && !finishedInitialRender) {
      setFinishedInitialRender(true);
    }
  }, [messages]);

  useEffect(() => {
    if (chatMessageListRef && chatMessageListRef.current) {
      // Scroll to end of messages
      chatMessageListRef.current.scrollTo(0, chatMessageListRef.current.scrollHeight);
    }
  }, [chatMessageListRef, messages]);

  // Using this to avoid animation on the initial load of messages
  // as `setFinishedInitialRender` forces a re-render of all messages
  const renderedChatMessageItems = useMemo(() => {
    return messages.map((message) => (
      <ChatMessageItem
        animation={finishedInitialRender}
        key={message.id}
        message={message}
        isUser={message.sender.id === user.id}
        data-testid="chat-thread-message"
      />
    ));
  }, [messages]);
  return (
    <>
      <ChatMessageList data-testid="chat-message-list" ref={chatMessageListRef}>
        {renderedChatMessageItems}
      </ChatMessageList>
      <ChatSendMessage onMessageSent={saveNewMessage} />
    </>
  );
};
