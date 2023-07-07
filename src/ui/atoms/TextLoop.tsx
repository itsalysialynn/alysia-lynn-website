import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% { opacity: 0;  }
  25% { opacity: .25;  }
  50% { opacity: .75; }
  75% { opacity: 1; }
  80% { opacity: .75; }
  100% { opacity: 0; }
`;

const Text = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

type TextLoopProps = {
  textArray: string[];
};

const TextLoop = ({ textArray }: TextLoopProps) => {
  const setText = (text) => {
    const element = document.getElementById('text');
    if (element) {
      element.innerHTML = text;
    }
  };
  const loopText = () => {
    let displayIndex = 0;
    const delay = 3000;

    setInterval(() => {
      setText(textArray[displayIndex]);

      displayIndex++;

      if (displayIndex >= textArray.length) {
        displayIndex = 0;
      }
    }, delay);
  };

  useEffect(() => {
    setText(textArray[textArray.length - 1]);
    loopText();
  }, [loopText, textArray]);

  return <Text id="text" />;
};

export default TextLoop;
