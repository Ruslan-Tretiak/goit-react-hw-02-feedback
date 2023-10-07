import React from 'react';

export const FeedbackButton = ({ onFeedback }) => {
    return (
      <div>
        <button onClick={() => onFeedback('good')}>Добре</button>
        <button onClick={() => onFeedback('neutral')}>Нейтрально</button>
        <button onClick={() => onFeedback('bad')}>Погано</button>
      </div>
    );
};


