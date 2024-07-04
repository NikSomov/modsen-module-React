import React, { useState } from 'react';
import { TextContainer, ToggleButton } from './styles';

const TextComponent = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const firstSentence = text.split('. ')[0] + '.';

  return (
    <TextContainer>
      <p>{isExpanded ? text : firstSentence}</p>
      <ToggleButton onClick={handleToggle}>
        {isExpanded ? 'Скрыть' : 'Показать подробнее'}
      </ToggleButton>
    </TextContainer>
  );
};

export default TextComponent;
