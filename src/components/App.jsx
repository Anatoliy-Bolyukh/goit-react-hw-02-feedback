
import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button/Button";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

class App extends React.Component {
  state = {
    good: 6,
    neutral: 1,
    bad: 6,
  }

  feedback = (state) => {
    return Object.keys(state)
  }
  // countTotalFeedback()

  render() {
    const { good, neutral, bad } = this.state
    return (
      <>
        <Section title={'Please leave feedback'}>
          <Button children={this.feedback(this.state)} />
        </Section>
        <Section title={'Statistics'}>
          <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} positivePercentage={Math.round((good / (good + neutral + bad)) * 100)} />
        </Section>

        {/* <ul>
          <li>
            <p>Good:<span>{this.state.good}</span></p>
          </li>
          <li>
            <p>Neutral</p>
            <span></span>
          </li>
          <li>
            <p>Bad</p>
            <span></span>
          </li>
          <li>
            <p>Total</p>
            <span></span>
          </li>
          <li>
            <p>Positive feedback</p>
            <span></span>
          </li>
        </ul> */}
      </>
    )
  }

}


export default App


