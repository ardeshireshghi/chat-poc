import styled, { keyframes } from 'styled-components';

type AnimationDirecton = 'right' | 'left';

interface FlyInAnimationProps {
  enterDirection: AnimationDirecton;
  duration: string;
}

const flyInAnimation = (enterDirection: AnimationDirecton) => keyframes`
  0% {
    opacity: 0;
    transform: translateX(${enterDirection === 'right' ? '10%' : '-10%'})
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FlyInAnimation = styled.div`
  animation: ${(props: FlyInAnimationProps) => flyInAnimation(props.enterDirection)} ${(
  props: FlyInAnimationProps
) => props.duration}; ease;
  animation-fill-mode: forwards;
  will-change: opacity, transform;
  opacity: 0;
  animation-delay: 
`;
