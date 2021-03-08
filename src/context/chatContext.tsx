import React, { useCallback, useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import { IMessage } from '../domain/models/message';
import { ChatMessageRepository } from '../infrastructure/ChatMessageRepository';
import ChatMessageService from '../services/ChatMessageService';
import useAuth from '../hooks/auth';
interface IChatContext {
  messages: IMessage[];
}

const initialContextValue: IChatContext = {
  messages: []
};

const ChatContext = createContext(initialContextValue);

const chatMessageService = new ChatMessageService(new ChatMessageRepository());

export const ChatDataProvider: React.FC = ({ children }) => {
  const [chatMessages, setChatMessages] = useState<IMessage[]>([]);
  const { isAuthenticated, currentUser } = useAuth();

  const fetchMessages = useCallback(async () => {
    const messages: IMessage[] = await chatMessageService.fetchMessagesForUser(currentUser().id);

    setChatMessages(messages);
  }, []);

  useEffect((): void => {
    if (isAuthenticated()) {
      fetchMessages();
    }
  }, []);
  return <ChatContext.Provider value={{ messages: chatMessages }}>{children}</ChatContext.Provider>;
};

export const useChatMessages = (): IChatContext => {
  const context = useContext<IChatContext>(ChatContext);
  return context;
};
