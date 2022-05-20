import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.js/index.js'

import { UserContextProvider } from '../contexts/UserContext.js'

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:testId" element={<Home />} />
          <Route path="/:testId/results" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}