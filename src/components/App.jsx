import React, { Component } from 'react';
import { FeedbackButton } from './Feedback/FeedbackButton';
import { FeedbackStatistics } from './Feedback/FeedbackStatistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1
    }));
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Залиште свій відгук</h1>
        <FeedbackButton onFeedback={this.handleFeedback} />
        
        <FeedbackStatistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
        />
      </div>
    );
  }
}
