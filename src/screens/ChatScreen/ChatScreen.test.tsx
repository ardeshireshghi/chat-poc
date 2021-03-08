import React from 'react';
import { render, waitFor } from '../../../test-utils';
import ChatScreen from '.';

describe('ChatScreen', () => {
  it('should show the title', async () => {
    const { getByTestId } = render(<ChatScreen />, {});
    await waitFor(() => expect(getByTestId('chat-screen-title')).toBeInTheDocument());
  });
});
