import React from 'react';
import { OptionsContainer, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map((option) => (
        <OptionButton
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionButton>
      ))}
    </OptionsContainer>
  );
};
