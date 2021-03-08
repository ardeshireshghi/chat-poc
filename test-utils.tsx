import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/styleguide/theme';

import { ChatDataProvider } from './src/context/chatContext';
import { IMessage } from './src/domain/models/message';

const renderWithAllProviders = (
  ui: React.ReactElement,
  { chatInitialMessages = [], ...options }: { chatInitialMessages?: IMessage[] } = {}
) => {
  const AllTheProviders: React.FC = ({ children }) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <ChatDataProvider value={{ messages: chatInitialMessages }}>{children}</ChatDataProvider>
      </ThemeProvider>
    );
  };
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithAllProviders };
