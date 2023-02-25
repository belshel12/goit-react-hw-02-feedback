import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Statistics/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackOptions = option => {
    if (option === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (option === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (option === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentAge = (this.state.good / total) * 100;

    return percentAge.toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      onFeedbackOptions,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const optionKeys = Object.keys(this.state);
    const amount = countTotalFeedback();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionKeys}
            onLeaveFeedback={onFeedbackOptions}
          />
        </Section>

        <Section title="Statistics">
          {amount ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={amount}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
