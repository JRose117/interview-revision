import Quiz from './Quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="site-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element= {< Quiz />}/>
          </Routes>
          {/* <PageFooter/> */}
        </BrowserRouter>
      </div>
    </>
  )
}

export default App