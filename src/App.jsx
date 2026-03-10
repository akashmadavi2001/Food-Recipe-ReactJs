import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Food from './Component/Food'
import Instruction from './Component/Instruction'

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={Food}></Route>
      <Route path='/:idMeal' Component={Instruction}></Route>
    </Routes>
  </BrowserRouter>
    
  )
}
