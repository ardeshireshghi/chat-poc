import styled from 'styled-components';
import { normalSpacing } from '../../styleguide/utils';

const ChatMessageList = styled.div`
  background: white;
  scroll-behavior: smooth;
  overscroll-behavior: none;
  overflow-y: scroll;
  padding: ${normalSpacing};
  flex: 1;
`;

export default ChatMessageList;
