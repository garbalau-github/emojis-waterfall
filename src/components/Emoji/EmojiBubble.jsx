import styled, { keyframes } from 'styled-components';
import EmojiWrapper from './EmojiWrapper';

const floatAnimation = (one, two) => keyframes`
  0% {
    /* Starts from the -10% of screen */
    bottom: -10%;
    transform: translateX(0);
  }
  50% {
    transform: translateX(${one}px);
  }
  100% {
    /* Ends on 110% of screen */
    bottom: 110%;
    transform: translateX(${two}px);
  }
`;

const EmojiBubble = styled(EmojiWrapper)`
  position: absolute;
  bottom: 0;
  font-size: ${({ size }) => (size ? size : 2)}rem;
  left: ${({ left }) => (left ? left : 10)}%;
  /* size = duration */
  /* smaller emojis should move faster than bigger ones */
  animation: ${({ one, two }) => floatAnimation(one, two)}
    ${({ size }) => (size < 3 ? 5 : 6)}s ease-in forwards;
`;

export default EmojiBubble;
