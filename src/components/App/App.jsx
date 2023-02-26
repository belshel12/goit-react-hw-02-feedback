import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Statistics/Notification';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackOptions = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentAge = (this.state.good / total) * 100;

    return Math.round(percentAge);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      handleFeedbackOptions,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const optionKeys = Object.keys(this.state);
    const amount = countTotalFeedback();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionKeys}
            onLeaveFeedback={handleFeedbackOptions}
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
        <GlobalStyle />
      </Layout>
    );
  }
}
