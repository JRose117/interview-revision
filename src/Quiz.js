import {orderedQuestions} from "./Questions"
import { useState, useLayoutEffect } from "react"


const Quiz = () => {

const [questions, setQuestions] = useState(orderedQuestions)
const [reveal, setReveal] = useState(false)
const [count, setCount] = useState(0)

const revealAnswer = () => {
    setReveal(reveal => !reveal)
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
  if(event.target.name === "correct") {
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
    <h1>{questions[0].Question}</h1>
    <h2>{reveal && questions[0].Answer}</h2>
      <div className="answerButtons">
        <button name="correct" value="yes" id="yes" onClick={handleButtonClick}>✔️</button>
      </div>
      <div className="answerButtons">
        <button name="wrong" value="no" id="no" onClick={handleButtonClick} >✕</button>
      </div>
      <div className="showAnswer">
        <button name="reveal" value="reveal" id="reveal" onClick={revealAnswer} >reveal answer</button>
      </div>
      <h3> You have got {count} out of {orderedQuestions.length} correct so far!</h3>

  </>
)
}


export default Quiz