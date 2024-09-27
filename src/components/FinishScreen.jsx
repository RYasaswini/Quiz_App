import React from 'react'

function FinishScreen({dispatch,points,maxPossiblePoints}) {
  return (
    <div className="finish_screen">
        <p>Your Score is : {points} / {maxPossiblePoints} </p>
        <button className="btn" onClick={()=> dispatch({type: "restart"})}>
            Restart
        </button>
    </div>
  )
}

export default FinishScreen;