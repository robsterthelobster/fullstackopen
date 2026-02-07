import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (value, setFunc) => () => setFunc(value + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleClick(good, setGood)}/>
      <Button text="neutral" onClick={handleClick(neutral, setNeutral)}/>
      <Button text="bad" onClick={handleClick(bad, setBad)}/>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

const Button = (props) => {
  const {
    text, onClick
  } = props;

  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = (props) => {
  const {
    label, statistic
  } = props;

  return (
    <tr>
      <td>{label}</td>
      <td>{statistic}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {
    good, bad, neutral
  } = props;

  const total = good + bad + neutral;

  if (total <= 0) {
    return <div>No feedback given</div>
  } 

  const average = (good * 1 + bad * -1) / total;
  const positive = good / total * 100 + " %"

  return (
    <table>
      <tbody>
        <StatisticLine label="good" statistic={good}/>
        <StatisticLine label="neutral" statistic={neutral}/>
        <StatisticLine label="bad" statistic={bad}/>
        <StatisticLine label="all" statistic={good + neutral + bad}/>
        <StatisticLine label="average" statistic={average}/>
        <StatisticLine label="positive" statistic={positive}/>
      </tbody>
    </table>
  )
}

export default App