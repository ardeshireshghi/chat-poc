import styled from 'styled-components';
import { Theme } from '../../styleguide/index.d';

interface AvatarProps {
  name: string;
  theme: Theme;
  bgColor: keyof Theme['colors'];
}

const Avatar = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  background-color: ${(props: AvatarProps) => props.theme.colors[props.bgColor]};
  &:before {
    content: ${(props: AvatarProps) => `'${props.name?.charAt(0).toUpperCase()}'`};
    display: block;
    text-align: center;
    top: 50%;
    position: relative;
    transform: translateY(-50%);
    color: white;
  }
`;

export default Avatar;
