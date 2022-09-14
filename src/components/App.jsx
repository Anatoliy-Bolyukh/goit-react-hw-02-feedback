
import React from "react";
// import ReactDOM from "react-dom";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // totalFeedback() {
  //   const { good, neutral, bad } = this.state
  //   let total = good + neutral + bad
  //   return total
  // }

  feedback = (state) => {
    return Object.keys(state)
  };

  onFeedback = (value) => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1
    }))

  };



  render() {
    const { good, neutral, bad } = this.state
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions children={this.feedback(this.state)} onFeedback={this.onFeedback} />
        </Section>
        <Section title='Statistics'>{good + neutral + bad === 0 ? (<Notification message={"There is no feedback"} />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} positivePercentage={Math.round((good / (good + neutral + bad)) * 100)} />
        )}
        </Section>
      </>
    )
  }

}


export default App


