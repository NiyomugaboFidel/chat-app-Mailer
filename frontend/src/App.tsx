import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SigmUp from './components/SignUp/SignUp'
import Login from './components/SignUp/Login'
import Home from './components/Home/Home'
import './App.css'

const App:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SigmUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App