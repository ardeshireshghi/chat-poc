import React, { useCallback, useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import { IMessage, Message } from '../domain/models/message';
import { ChatMessageRepository } from '../infrastructure/ChatMessageRepository';
import ChatMessageService from '../services/ChatMessageService';
import useAuth from '../hooks/auth';
interface IChatContext {
  messages: IMessage[];
  saveNewMessage: (message: IMessage['text']) => void;
}

interface ChatDataProviderProps {
  children: React.ReactNode;
  value?: Partial<IChatContext>;
}

const initialContextValue: IChatContext = {
  messages: [],
  saveNewMessage: (message: IMessage['text']) => null
};

const ChatContext = createContext(initialContextValue);

const chatMessageService = new ChatMessageService(new ChatMessageRepository());

export const ChatDataProvider: React.FC<ChatDataProviderProps> = ({ value, children }) => {
  const [chatMessages, setChatMessages] = useState<IMessage[]>(value?.messages || []);
  const { isAuthenticated, currentUser } = useAuth();

  const fetchMessages = useCallback(async () => {
    const messages: IMessage[] = await chatMessageService.fetchMessagesForUser(currentUser().id);

    setChatMessages((currentMessages) => [...currentMessages, ...messages]);
  }, []);

  const saveNewMessage = (message: IMessage['text']) => {
    setChatMessages((currentMessages) => [...currentMessages, new Message(message, currentUser())]);
  };

  useEffect((): void => {
    if (isAuthenticated()) {
      fetchMessages();
    }
  }, []);
  return (
    <ChatContext.Provider value={{ messages: chatMessages, saveNewMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatMessages = (): IChatContext => {
  const context = useContext<IChatContext>(ChatContext);
  return context;
};
