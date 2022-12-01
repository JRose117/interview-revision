import { orderedQuestions } from "./Questions"
import { useState, useLayoutEffect } from "react"


const Quiz = () => {

  const [questions, setQuestions] = useState(orderedQuestions)
  const [reveal, setReveal] = useState(false)
  const [count, setCount] = useState(0)
  const [disable, setDisable] = useState(false)
  const [buttonText, setButtonText] = useState('Reveal Answer')
  const [h2Background, setH2Background] = useState("")
  const [mainBackground, setMainBackground] = useState (100)

  const mainBackgroundCalc = () => {
    const percentageCalc = 100/24
    setMainBackground(mainBackground-percentageCalc)
  }
  
  console.log(mainBackground)

  const revealAnswer = () => {
    setReveal(reveal => !reveal)
    setH2Background(h2Background === '#3792cb' ? 'transparent' : '#3792cb');

    if (buttonText === 'Reveal Answer') {
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
    setMainBackground(100)
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
  }, [])


  console.log(questions)

  const handleButtonClick = (event) => {
    setButtonText('Reveal Answer')
    setH2Background(false)
    if (event.target.name === "correct") {
      if (questions.length === 1) {
        console.log("1")
        setDisable(true)
      }
      console.log(disable)
      questions.shift()
      newQuestion()
      mainBackgroundCalc()
      setReveal(false)
      setCount(count + 1)
    }
    else {
      newQuestion()
      setReveal(false)
      console.log("wrong")
    }
  }

  return (
    <div className="green" style={{backgroundColor: "#77b5d9"}}>
      <div className="main" style={{
        height: `calc(${mainBackground}vh)`,
        backgroundColor: `#d7eaf3`,
      }}
>
        <div className="Top">
          <h1> {!disable ? questions[0].Question : "Answered All Questions Please Refresh"} </h1>
          <h2 style={{
            backgroundColor: h2Background,
          }}>
            {reveal && questions[0].Answer}</h2>
        </div>
        <div className="Bottom">
          <div className="Buttons">
            <div className="answerButtons">
              <button name="wrong" disabled={disable} value="no" id="no" onClick={handleButtonClick} ></button>
            </div>
            <div className="showAnswer">
            {disable ? <button name="refresh" value="refresh" id="refresh" onClick={handleRefresh} style={{backgroundColor:'#3792cb'}}> Refresh </button> :
              <button name="reveal" value="reveal" id="reveal" onClick={revealAnswer} style={{backgroundColor:'#3792cb'}}>{buttonText}</button>}
            </div>
            <div className="answerButtons">
              <button name="correct" disabled={disable} value="yes" id="yes" onClick={handleButtonClick}></button>
            </div>
          </div>
          <h3> You have got {count} out of {orderedQuestions.length} correct so far!</h3>
        </div>
      </div>
      </div>
)
}


export default Quiz