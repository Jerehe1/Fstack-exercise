import { useState } from 'react'

const Statistic = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)

  }
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const postivePercentage = total === 0 ? 0 : (good / total) * 100
  

  return (
    <>
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleBadClick} text="Bad" />
      <Button onClick={handleNeutralClick} text="Neutral" />
    </div>
    <div>
      <h1>Statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <table>
            <tbody>
            <tr>
              <th>Feedback</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>
                <Statistic text="Good" />
                <Statistic text="Neutral" />
                <Statistic text="Bad" />
                <Statistic text="Total" />
                <Statistic text="Average" />
                <Statistic text="Positive" />
              </td>
              <td>
                <Statistic value={good} />
                <Statistic value={neutral} />
                <Statistic value={bad} />
                <Statistic value={total} />
                <Statistic value={average.toFixed(3)} />
                <Statistic value={postivePercentage.toFixed(1) + " %"} />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  )
}

export default App
