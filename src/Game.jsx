import { useState, useEffect } from "react"
import Numbers from './Numbers'
import CountdownTimer from './CountdownTimer'
import GameOver from "./GameOver"
import { Link } from "react-router-dom"
import './App.css'
import db from '../firebase'
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'

export default function Game () {

    const [ansArr, setAnsArr] = useState([])
    const [fail, setFail] = useState(false)
    const [complete, setComplete] = useState(false)
    const [levelCount, setLevelCount] = useState(1)
    const [expectation, setExpectation] = useState(Math.floor(3 + (levelCount / 4)))
    const [empties, setEmpties] = useState(new Array(Math.floor(3 + (levelCount / 4))).fill(''))
    const [initialTime, setInitialTime] = useState(Math.floor(20 - (levelCount * 0.7)))
    const [reset, setReset] = useState(false)
    const [clickCount, setClickCount] = useState(0)
    const [displayArr, setDisplayArr] = useState([])

    if(ansArr.length === expectation){
        setAnsArr([])
        setLevelCount(levelCount + 1)
        setExpectation(Math.floor(3 + (levelCount / 4)))
        setReset(true)
        setClickCount(0)
        setEmpties(new Array(Math.floor(3 + (levelCount / 4))).fill(''))
    }
    
    function resetLevel () {
        setAnsArr([])
        setClickCount(0)
        setEmpties(new Array(Math.floor(3 + (levelCount / 4))).fill(''))
    }

    function resetGame () {
        setAnsArr([])
        setExpectation(3)
        setLevelCount(1)
        setFail(false)
        setReset(true)
        setClickCount(0)
        setEmpties(new Array(3).fill(''))
    }

    const display = ansArr.concat(empties)

    return (
        <>
            <div>
                
                <div  className="side-by-side">
                    {/* <h3 >Level: {levelCount}</h3> */}

                <div >
                    <CountdownTimer style={{width: '40%'}} fail={fail} setFail={setFail} initialTime={initialTime} reset={reset} setReset={setReset} levelCount={levelCount}/>
                </div>
                </div>
                <div>
                    {fail === true ? <GameOver levelCount={levelCount} /> : <Numbers setAnsArr={setAnsArr} ansArr={ansArr} setFail={setFail} fail={fail} levelCount={levelCount} clickCount={clickCount} empties={empties} setEmpties={setEmpties} setClickCount={setClickCount} expectation={expectation} setComplete={setComplete}/>}
                </div>
                
                
                    {fail === true ? null :<div style={{border: '2px solid blue', minHeight: '47px'}}><div className='ansArr'>{display.map((item) => { return ( <> <li key={item} style={{display: 'inline-block', border: '2px solid blue', listStyle: 'none', padding: '5px', margin: '5px'}}>{item}</li></>) })}</div></div>}
                
                

            <div>
                {fail === true ? null : <p>Numbers Required: {expectation}</p>}
            </div>

            
            <div>
                <button disabled={fail} onClick={() => {resetLevel()}} style={{border: '2px solid black', margin: '10px'}}>Reset Level</button>
                <button onClick={() => {resetGame()}} style={{border: '2px solid black', margin: '10px'}}>Reset Game</button>

                </div>
            </div>
            
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "8px"}} to="/">Back   </Link>
        </>
    )
}