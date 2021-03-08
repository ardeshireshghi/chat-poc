import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  flex: 0 1 auto;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.default};
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 4px 0;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 1px 4px 8px 2px;
  }
`;
