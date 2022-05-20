import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Initial from './Initial.js/index.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial/>} />
      </Routes>
    </BrowserRouter>
  )
}