import React from 'react';
import { renderWithAllProviders, waitFor } from '../../../test-utils';
import ChatScreen from '.';

describe('ChatScreen', () => {
  it('should show the title', async () => {
    const { getByTestId } = renderWithAllProviders(<ChatScreen />, {});
    await waitFor(() => expect(getByTestId('chat-screen-title')).toBeInTheDocument());
  });
});
