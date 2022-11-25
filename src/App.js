import Quiz from './Quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Instructions from './Instructions'

const App = () => {
  return (
    <>
      <div className="site-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
          {/* <PageFooter/> */}
        </BrowserRouter>
      </div>
    </>
  )
}

export default App