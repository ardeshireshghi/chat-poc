import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styleguide/theme';
import ChatScreen from './screens/ChatScreen';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  justify-content: center;
  margin: auto;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <ChatScreen />
    </AppContainer>
  );
};

const AppWithStyles: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  );
};

export default AppWithStyles;
