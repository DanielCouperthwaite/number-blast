import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Game from './Game'
import Home from './Home'
import Leaderboard from './Leaderboard'
import Instructions from './Instructions'
import About from './About'



function App() {
  


  return (
    <>
      

        
    <BrowserRouter>
    
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
    </BrowserRouter>
        
      
    </>
  )
}

export default App
