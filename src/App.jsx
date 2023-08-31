import { useState } from 'react'
import './App.css'




function App() {
  
  function rand() {
    return Math.floor(Math.random()*10)
  }

  function expectation() {
    return 2 + Math.floor(Math.random()*4)
  }

  let value1 = rand()
  let value2 = rand()
  let value3 = rand()
  let value4 = rand()
  let value5 = rand()
  let value6 = rand()
  let value7 = rand()
  let value8 = rand()
  let value9 = rand()

  const [ansArr, setAnsArr] = useState([])
  const array = []

  const [fail, setFail] = useState(false)

  function handlePress (value){
    setAnsArr((prev) => [...prev, value])
    array.push(value)
    console.log("ansArr: ", ansArr)
    console.log("array: ", array)
    if(ansArr[ansArr.length - 1] > value){
      console.log('Incorrect! Bad Luck!')
      setFail(true)
    }
  }

  return (
    <>
      <div>
       
        <h1>Number Blast</h1>
        <div>
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
        </div>
      </div>
      <div style={{border: '2px solid blue', textAlign: 'center'}}>
        <ul style={{textAlign: 'center'}}>
          {ansArr.map((item) => {
            return (
              <>
            <li style={{textAlign: 'center', border: '2px solid blue', listStyle: 'none', display: 'inline-block', padding: '5px', margin: '5px'}}>{item}</li>
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
        {expectation()}
      </div>
    </>
  )
}

export default App
