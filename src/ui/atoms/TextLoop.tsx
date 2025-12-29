import React, { useEffect, useState } from 'react';
import { keyframes, styled } from 'styled-components';

const fadeAnimation = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
`;

const Text = styled.span`
  animation: ${fadeAnimation} 3s ease-in-out;
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

    return () => {
      clearInterval(interval);
    };
  }, [textArray]);

  return <Text key={currentIndex}>{textArray[currentIndex]}</Text>;
};

export default TextLoop;
