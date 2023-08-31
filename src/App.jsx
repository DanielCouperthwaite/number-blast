import { useState } from 'react'
import './App.css'
import Numbers from './Numbers'



function App() {
  
  const [ansArr, setAnsArr] = useState([])
  
  const [fail, setFail] = useState(false)
  const [complete, setComplete] = useState(false)
  const [expectation, setExpectation] = useState(2 + Math.floor(Math.random()*4)) 
  const [levelCount, setLevelCount] = useState(1)
  
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
    setLevelCount(levelCount + 1)
  }


  return (
    <>
      
      <div>
       
        <h1>Number Blast</h1>
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
        <button disabled={fail} onClick={() => {resetLevel()}}>Reset Level</button>

      </div>

      <div>
        <p>Numbers Required:</p>
        <p>{expectation}</p>
      </div>
    </>
  )
}

export default App
