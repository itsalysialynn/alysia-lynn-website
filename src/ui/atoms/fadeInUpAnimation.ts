import { keyframes } from 'styled-components';

const fadeInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,40px,0)
  }

  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export default fadeInUpAnimation;
