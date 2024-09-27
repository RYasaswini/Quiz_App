import React from 'react';
import FooterContent from "./FooterContent";

function QuizStart({dispatch,questions,totalQuestions,index,answer}) {
    const hasAnswer=answer !== null;   
    return (
    <div className="quiz">
        <div className="quiz_header">
            <h2>{questions.question}</h2>
        </div>
        <div className="quiz_body">
           {questions.options.map((option,index)=>(
            <li 
                key={option} 
                onClick={()=>dispatch({type: "newAnswer",payload:index})}
                className={`${
                    hasAnswer 
                    ? index === questions.correctOption 
                        ? "correct"
                        : "wrong"
                    :""
                }`}
            >
                {option}
            </li>
           ))}
        </div>
        <div className="quiz_footer">
            <p>Number of Questions {index} / {totalQuestions}</p>
            <FooterContent 
              dispatch={dispatch} 
              index={index} 
              totalQuestions={totalQuestions}
            />
            
        </div>
    </div>
  )
}

export default QuizStart;