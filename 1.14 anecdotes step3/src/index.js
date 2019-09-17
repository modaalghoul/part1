import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(5)).map(Number.prototype.valueOf,0))

  const handleRandom = () => {
	const random = Math.floor(Math.random() * 5) + 0;
	setSelected(random)
  }

  const handleVote = () => {
	const copyOfPoints = [...points]
	copyOfPoints[selected] += 1
	setPoints(copyOfPoints)
  }

  const highestVote = () => {
    return {
      value: Math.max(...points),
      index: points.indexOf(Math.max(...points))
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}<br/>
      has {points[selected]} votes
      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandom}>next anecdote</button>

      
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[highestVote().index]}<br/>
      has {highestVote().value} votes
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)