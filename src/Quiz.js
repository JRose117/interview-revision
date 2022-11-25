import {orderedQuestions} from "./Questions"
import { useState, useLayoutEffect } from "react"


const Quiz = () => {

const [questions, setQuestions] = useState(orderedQuestions)
const [reveal, setReveal] = useState(false)
const [count, setCount] = useState(0)
const [disable, setDisable] = useState(false)
const [buttonText, setButtonText] = useState ('Reveal Answer')
const revealAnswer = () => {
    setReveal(reveal => !reveal)
    if (buttonText === 'Reveal Answer'){
      setButtonText('Hide Answer')      
    } else {
      setButtonText('Reveal Answer')
    }
}

const handleRefresh = () => {
  setCount(0)
  setQuestions(orderedQuestions)
  firstQuestion()
  setDisable(false)
}

const firstQuestion = () => {
  const questionsShuffled = orderedQuestions.sort(() => Math.random() - 0.5)
  setQuestions([...questionsShuffled])
}

const newQuestion = () => {
  const questionsShuffled = questions.sort(() => Math.random() - 0.5)
  setQuestions([...questionsShuffled])
}

useLayoutEffect(() => {
  firstQuestion()
},[])


console.log(questions)

const handleButtonClick = (event) => {
  setButtonText('Reveal Answer')
  if(event.target.name === "correct") {
    if (questions.length === 1){
      console.log("1")
      setDisable(true)
    }
    console.log(disable)
    questions.shift()
    newQuestion()
    setReveal(false)
    console.log(questions)
    setCount(count + 1)
    }
  else{
    newQuestion()
    setReveal(false)
    console.log("wrong")
  }
}

return( 
  <>
    <div className="Top">
      <h1> {!disable ? questions[0].Question : "Answered All Questions Please Refresh"} </h1>
      <h2>{reveal && questions[0].Answer}</h2>
      {disable && <button name="refresh" value="refresh" id="refresh" onClick={handleRefresh}> Refresh </button>}
    </div>
    <div className ="Bottom">
      <div className="Buttons">
        <div className="answerButtons">
          <button name="wrong" disabled={disable} value="no" id="no" onClick={handleButtonClick} ></button>
        </div>
        <div className="showAnswer">
          <button name="reveal" disabled={disable} value="reveal" id="reveal" onClick={revealAnswer} >{buttonText}</button>
        </div>
        <div className="answerButtons">
          <button name="correct" disabled={disable} value="yes" id="yes" onClick={handleButtonClick}></button>
        </div>
      </div>
      <h3> You have got {count} out of {orderedQuestions.length} correct so far!</h3>
      </div>

  </>
)
}


export default Quiz