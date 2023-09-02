import { useState } from 'react'
import './App.css'

export default function Numbers ({setAnsArr, ansArr, setFail, fail, expectation, setComplete}) {

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



    function handlePress (value){
        setAnsArr((prev) => [...prev, value])
        array.push(value)

        if(ansArr[ansArr.length - 1] > value){
          console.log('Incorrect! Bad Luck!')
          setFail(true)
        } 
      }

      

    return (
        <>
        <div>
            <div>
                <button disabled={fail} onClick={() => {handlePress(value1)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value1}</button>
                <button disabled={fail} onClick={() => {handlePress(value2)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value2}</button>
                <button disabled={fail} onClick={() => {handlePress(value3)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value3}</button>
            </div>
            <div>
                <button disabled={fail} onClick={() => {handlePress(value4)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value4}</button>
                <button disabled={fail} onClick={() => {handlePress(value5)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value5}</button>
                <button disabled={fail} onClick={() => {handlePress(value6)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value6}</button>
            </div>
            <div>
                <button disabled={fail} onClick={() => {handlePress(value7)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value7}</button>
                <button disabled={fail} onClick={() => {handlePress(value8)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value8}</button>
                <button disabled={fail} onClick={() => {handlePress(value9)}} style={{fontSize: 60, border: '2px solid blue', display: 'inline-block', padding: '10px', margin: '15px'}}>{value9}</button>
            </div>
        </div>
        </>
    )
}