import { useState } from 'react'
import './App.css'
import Numbers from './Numbers'
import CountdownTimer from './CountdownTimer'



function App() {
  
  const [ansArr, setAnsArr] = useState([])
  
  const [fail, setFail] = useState(false)
  const [complete, setComplete] = useState(false)
  const [expectation, setExpectation] = useState(2 + Math.floor(Math.random()*4)) 
  const [levelCount, setLevelCount] = useState(1)
  let [seconds, setSeconds] = useState(7);
  const [resetTimer, setResetTimer] = useState(true)
  
  function rand() {
    return Math.floor(Math.random()*10)
  }

  if(ansArr.length === expectation){
    setAnsArr([])
    setExpectation(2 + Math.floor(Math.random()*4))
    setLevelCount(levelCount + 1)
  }
  
  function resetLevel () {
    setAnsArr([])
  }

  function resetGame () {
    setAnsArr([])
    setExpectation(2 + Math.floor(Math.random()*4))
    setLevelCount(1)
    setFail(false)
    setResetTimer(true)
  }


  return (
    <>
      
      <div>
       
        <h1>Number Blast!</h1>
        <h3>Level: {levelCount}</h3>
        <Numbers setAnsArr={setAnsArr} ansArr={ansArr} setFail={setFail} fail={fail} expectation={expectation} setComplete={setComplete}/>
      </div>
      <div style={{border: '2px solid blue'}}>
        <div className='ansArr'>
          {ansArr.map((item) => {
            return (
              <>
            <li style={{display: 'inline-block', border: '2px solid blue', listStyle: 'none', padding: '5px', margin: '5px'}}>{item}</li>
              </>
            ) 
          })}
        </div>
      </div>
      <div>
        {fail === true ? <p>Game Over!</p> : null}
      </div>

      <div>
        <p>Numbers Required:</p>
        <p>{expectation}</p>
      </div>
{/* 
      <CountdownTimer fail={fail} setFail={setFail} seconds={seconds} setSeconds={setSeconds} resetTimer={resetTimer} setResetTimer={setResetTimer}/>
       */}
      <div>
        <button disabled={fail} onClick={() => {resetLevel()}} style={{border: '2px solid black', margin: '10px'}}>Reset Level</button>
        <button onClick={() => {resetGame()}} style={{border: '2px solid black', margin: '10px'}}>Reset Game</button>
      </div>
    </>
  )
}

export default App
