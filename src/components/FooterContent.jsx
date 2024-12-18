import React from 'react'

function FooterContent({totalQuestions,dispatch,index}) {
    if(index <= totalQuestions -1){
        return (
            <button 
                className="btn" 
                onClick={()=> dispatch({type: "nextQuestions"})}
            >
                Next
            </button>
        );    
            
    }

    if(index === totalQuestions){
        return (
            <button 
                className="btn" 
                onClick={()=> dispatch({type: "finishScreen"})}
            >
                Finish
            </button>
        );    
            
    }

}
export default FooterContent;
