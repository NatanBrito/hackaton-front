import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.js/index.js'
import NewTest from "./NewTest"
import TestPage from './TestPage/index.jsx'

import { UserContextProvider } from '../contexts/UserContext.js'

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newTest" element={<NewTest />} />
          <Route path="/tests/:testId" element={<TestPage />} />
          <Route path="/tests/:testId/results" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}