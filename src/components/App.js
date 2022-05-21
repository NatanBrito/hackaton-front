import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.js/index.js'
import NewTest from "./NewTest"

import { UserContextProvider } from '../contexts/UserContext.js'

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:testId" element={<Home />} />
          <Route path="/:testId/results" element={<Home />} />
          <Route path="/newTest" element={<NewTest />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}