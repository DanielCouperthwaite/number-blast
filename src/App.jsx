import { useState } from 'react'
import './App.css'




function App() {
  
  function rand() {
    return Math.floor(Math.random()*10)
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

  let ansArr = []

  const [fail, setFail] = useState(false)

  function handlePress (value){
    ansArr.push(value)
    console.log("ansArr: ", ansArr)
    if(ansArr[ansArr.length - 2] > value){
      console.log('Incorrect! Bad Luck!')
      setFail(true)
    }
  }

  return (
    <>
      <div>
       
        <h1>Number Blast</h1>
        <div>
          <button onClick={() => {handlePress(value1)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value1}</button>
          <button onClick={() => {handlePress(value2)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value2}</button>
          <button onClick={() => {handlePress(value3)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value3}</button>
        </div>
        <div>
          <button onClick={() => {handlePress(value4)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value4}</button>
          <button onClick={() => {handlePress(value5)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value5}</button>
          <button onClick={() => {handlePress(value6)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value6}</button>
        </div>
        <div>
          <button onClick={() => {handlePress(value7)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value7}</button>
          <button onClick={() => {handlePress(value8)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value8}</button>
          <button onClick={() => {handlePress(value9)}} style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value9}</button>
        </div>
      </div>
      <div>
        {fail === true ? <p>Game Over!</p> : null}
      </div>
    </>
  )
}

export default App
