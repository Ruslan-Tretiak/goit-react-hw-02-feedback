import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notifications/Notification';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = (good / total) * 100 || 0;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const options = ['good', 'neutral', 'bad'];

    return (
      <AppContainer>
        
        <h1>Please leave feedback</h1>
        <section title='feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        </section>
        {total > 0 ? (
        <section title='statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </section>
        ):(
        <Notification message="There is no feedback" />
        )
        }
      </AppContainer>
    );
  };
};
