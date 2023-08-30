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

  function handlePress (){
    
  }

  return (
    <>
      <div>
       
        <h1>Number Blast</h1>
        <div>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value1}</button>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value2}</button>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value3}</button>
        </div>
        <div>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value4}</button>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value5}</button>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value6}</button>
        </div>
        <div>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value7}</button>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value8}</button>
          <button style={{border: '2px solid blue', display: 'inline-block', padding: '20px', margin: '20px'}}>{value9}</button>
        </div>
      </div>
    </>
  )
}

export default App
