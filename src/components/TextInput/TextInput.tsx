import styled from 'styled-components';
import { normalSpacing } from '../../styleguide/utils';

export const TextInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.lighterGray};
  padding: ${normalSpacing};
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes.default};
  outline-color: lightblue;
`;
