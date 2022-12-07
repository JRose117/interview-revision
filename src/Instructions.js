import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'


const Instructions = () => {

const [reveal, setReveal] = useState(true)
const [redReveal, setRedReveal] = useState (false)
const [greenReveal, setGreenReveal] = useState (false)
const [demo, setDemo] = useState(<><h1 classname="instructionsHeadings"> On this website, you will be given a series of self-assessment technical style interview questions. </h1>
<h3 classname="instructionsHeadings"> Think of your answer and find out if you were right by clicking reveal answer </h3>
<h3 classname="instructionsHeadings"> Try pressing reveal answer now! </h3>
<h4 classname="instructionsHeadings"> Or click <Link to="/quiz"><span className="Skip">here</span></Link> to skip the demo </h4></>)
const revealAnswer = () => {
  if (redReveal){
    return}
    else{
    setDemo(<> <h1 classname="instructionsHeadings">Once you've clicked reveal answer, you will be able to see if you were right.</h1> 
                <h3 classname="instructionsHeadings"> If you were wrong then click the RED button and the question will re-enter the pool of questions. </h3> 
                <h3 classname="instructionsHeadings"> Try pressing the RED button now! </h3></>)
    setRedReveal(true)
  }
}

const handleButtonClick = () => {
  if (greenReveal) {
    return
  } else {
  setDemo(<> <h1 classname="instructionsHeadings"> If you were correct, then click the GREEN button. </h1> 
  <h3 classname="instructionsHeadings"> Once you've clicked the GREEN button, the question will be removed from the pool of questions and you won't be asked it again until you refresh the page. </h3> 
  <h3 classname="instructionsHeadings"> Try pressing the GREEN button now! </h3></>)
setGreenReveal(true)
}
}
const handleButtonGreen = () => {
  setDemo(<> <h1 classname="instructionsHeadings"> This Demo is Over, Refresh the page to start the Demo again. </h1>
  <h2 classname="instructionsHeadings"> or click Start to begin! </h2> <Link to="/quiz">
  <button> Start Quiz </button>
</Link> </>
)

  setRedReveal(false)
  setGreenReveal(false)
  setReveal (false)
}


return( 
  <>
    <div className="mainDemo">
      <div className="Top">
        {demo}
      </div>
      <div className="red">

      </div>
      <div className ="Bottom">
        <div className="Buttons">
          <div className="answerButtons">
            {redReveal && <button name="wrong" value="no" id="no" onClick={handleButtonClick} ></button>}
          </div>
          <div className="showAnswer">
            {reveal && <button name="revealDemo" value="revealDemo" id="revealDemo" onClick={revealAnswer} > Reveal Answer </button>}
          </div>
          <div className="answerButtons">
            {greenReveal && <button name="correct" value="yes" id="yes" onClick={handleButtonGreen}></button>}
          </div>
        </div>
        <div className="Skip">
      
        </div>
        </div>
      </div>
  </>
)
}

export default Instructions