import { useState } from 'react'
import './App.css'
import Numbers from './Numbers'



function App() {
  
  const [ansArr, setAnsArr] = useState([])
  
  const [fail, setFail] = useState(false)
  const [complete, setComplete] = useState(false)
  const [expectation, setExpectation] = useState(2 + Math.floor(Math.random()*4)) 
  
  function rand() {
    return Math.floor(Math.random()*10)
  }

  if(ansArr.length === expectation){
    setAnsArr([])
    setExpectation(2 + Math.floor(Math.random()*4))
  }
  


  return (
    <>
      
      <div>
       
        <h1>Number Blast</h1>

        <Numbers setAnsArr={setAnsArr} ansArr={ansArr} setFail={setFail} fail={fail} expectation={expectation} setComplete={setComplete}/>
      </div>
      <div style={{border: '2px solid blue'}}>
        <ul className='ansArr'>
          {ansArr.map((item) => {
            return (
              <>
            <li style={{display: 'inline-block', border: '2px solid blue', listStyle: 'none', padding: '5px', margin: '5px'}}>{item}</li>
              </>
            ) 
          })}
        </ul>
      </div>
      <div>
        {fail === true ? <p>Game Over!</p> : null}
      </div>

      <div>
        <p>Numbers Required:</p>
        {expectation}
      </div>
    </>
  )
}

export default App
