import React from 'react'

function StartScreen({dispatch,totalQuestions,maxPossiblePoints}) {
  return (
    <div className="quiz_wrapper">
        <h3>Welcome to the</h3>
        <h2>Programming Quiz</h2>
        <p>Number of Questions: {totalQuestions}</p>
        <p>Total Points: {maxPossiblePoints}</p>
        <button className="btn" onClick={()=> dispatch({type: "active"})}>
            Let's Start
        </button>
    </div>
  )
}

export default StartScreen;