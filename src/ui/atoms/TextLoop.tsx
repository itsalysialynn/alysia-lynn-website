import React, { useState, useEffect } from 'react';
import { keyframes, styled } from 'styled-components';

const fadeAnimation = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0.25; }
  50% { opacity: 0.75; }
  75% { opacity: 1; }
  80% { opacity: 0.75; }
  100% { opacity: 0; }
`;

const Text = styled.span`
  opacity: 0;
  animation: ${fadeAnimation} 3s ease-in-out infinite;
`;

type TextLoopProps = {
  textArray: string[];
};

const TextLoop: React.FC<TextLoopProps> = ({ textArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [textArray]);

  return <Text>{textArray[currentIndex]}</Text>;
};

export default TextLoop;
