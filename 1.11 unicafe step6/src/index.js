import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({feedback, text}) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{feedback}</td>
		</tr>
	)
}

const Button = ({onClick, text}) => {
	return (
		<>
			<button onClick={onClick}>{text}</button>
		</>
	)
}

const Statistics = ( {feedbacks} ) => {
	const total = () => {
		return (feedbacks.good + feedbacks.neutral + feedbacks.bad)
	}
	
	const averageScore = () => {
		return ( feedbacks.good*1 + feedbacks.neutral*0 + feedbacks.bad*-1 ) / total()
	}
	
	const positivePercentage = () => {
		return  <span> { ( feedbacks.good / total() ) * 100 } %</span>
	}

	if ( feedbacks.good === 0 && feedbacks.neutral === 0 && feedbacks.bad === 0 )
		return (
			<>
				No feedbacks given
			</>
		)
	
	return (
		<>
		<table>
			<tbody>
				<Statistic feedback = {feedbacks.good} text = "good"/>
				<Statistic feedback = {feedbacks.neutral} text = "neutral"/>
				<Statistic feedback = {feedbacks.bad} text = "bad"/>
				<Statistic feedback = {total()} text = "total"/>
				<Statistic feedback = {averageScore()} text = "average"/>
				<Statistic feedback = {positivePercentage()} text = "positive"/>
			</tbody>
		</table>
		</>
	)
	
}

const App = () => {
	// save clicks of each button to own state
	const [feedbacks, setFeedbacks] = useState( { good: 0, neutral: 0, bad: 0 } )
	
	const handleGood = () => {
		const newFeedbacks = {
			...feedbacks,
			good: feedbacks.good + 1
		}
		setFeedbacks(newFeedbacks)
	}

	const handleNeutral = () => {
		const newFeedbacks = {
			...feedbacks,
			neutral: feedbacks.neutral + 1
		}
		setFeedbacks(newFeedbacks)
	}

	const handleBad = () => {
		const newFeedbacks = {
			...feedbacks,
			bad: feedbacks.bad + 1
		}
		setFeedbacks(newFeedbacks)
	}

	return (
		<div>
			<h2>give feedback</h2>
			<Button onClick={handleGood} text="good" />
			<Button onClick={handleNeutral} text="neutral"/>
			<Button onClick={handleBad} text="bad"/>
			<h2>statistics</h2>
			<Statistics feedbacks = {feedbacks} />

		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
