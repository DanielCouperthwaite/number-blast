import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Game from './Game'
import Home from './Home'



function App() {
  


  return (
    <>
      

        
    <BrowserRouter>
    
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
      </Routes>
    </>
    </BrowserRouter>
        
      
    </>
  )
}

export default App
