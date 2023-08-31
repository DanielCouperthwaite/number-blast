import { useState } from 'react'
import './App.css'
import Numbers from './Numbers'



function App() {
  
  const [ansArr, setAnsArr] = useState([])
  
  const [fail, setFail] = useState(false)
  const [complete, setComplete] = useState(false)
  const [expectation, setExpectation] = useState(2 + Math.floor(Math.random()*4)) 
  const array = []
  
  function rand() {
    return Math.floor(Math.random()*10)
  }

  
  
  
  // let value1 = rand()
  // let value2 = rand()
  // let value3 = rand()
  // let value4 = rand()
  // let value5 = rand()
  // let value6 = rand()
  // let value7 = rand()
  // let value8 = rand()
  // let value9 = rand()

  


  

  return (
    <>
      
      <div>
       
        <h1>Number Blast</h1>

        <Numbers setAnsArr={setAnsArr} ansArr={ansArr} setFail={setFail} fail={fail} expectation={expectation}/>
        {/* <div>
          <button disabled={fail} onClick={() => {handlePress(value1)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value1}</button>
          <button disabled={fail} onClick={() => {handlePress(value2)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value2}</button>
          <button disabled={fail} onClick={() => {handlePress(value3)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value3}</button>
        </div>
        <div>
          <button disabled={fail} onClick={() => {handlePress(value4)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value4}</button>
          <button disabled={fail} onClick={() => {handlePress(value5)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value5}</button>
          <button disabled={fail} onClick={() => {handlePress(value6)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value6}</button>
        </div>
        <div>
          <button disabled={fail} onClick={() => {handlePress(value7)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value7}</button>
          <button disabled={fail} onClick={() => {handlePress(value8)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value8}</button>
          <button disabled={fail} onClick={() => {handlePress(value9)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value9}</button>
        </div> */}
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
        {ansArr.length === expectation ? <p>Complete!</p> : null}
      </div>
    </>
  )
}

export default App
