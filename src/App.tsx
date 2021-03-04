import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { defaultTheme } from './styleguide/theme';
import { ChatScreen } from './screens/ChatScreen';

const backgroundAnimation = keyframes`
  0% {
    background-color: yellow;
  }
  50% {
    background-color: #2196f3;
  }

  100% {
    background-color: yellow;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  justify-content: center;
`;

function App(): JSX.Element {
  return (
    <AppContainer>
      <ChatScreen />
    </AppContainer>
  );
}

const AppWithStyles = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  );
};

export default AppWithStyles;
