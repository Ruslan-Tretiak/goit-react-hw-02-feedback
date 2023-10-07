import React from 'react';

export const FeedbackStatistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Статистика</h2>
      <div>Добре: {good}</div>
      <div>Нейтрально: {neutral}</div>
      <div>Погано: {bad}</div>
    </div>
  );
};
