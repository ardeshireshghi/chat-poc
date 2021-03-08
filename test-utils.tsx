import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/styleguide/theme';

import { ChatDataProvider } from './src/context/chatContext';

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChatDataProvider>{children}</ChatDataProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
