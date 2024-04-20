import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './Movies'
import CreateMovie from './ CreateMovie'
import UpdateMovie from './UpdateMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies />}></Route>
          <Route path='/create' element={<CreateMovie />}></Route>
          <Route path='/update/:id' element={<UpdateMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
