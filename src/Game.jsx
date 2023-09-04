import { useState, useEffect } from "react"
import Numbers from './Numbers'
import CountdownTimer from './CountdownTimer'
import { Link } from "react-router-dom"
import './App.css'
import db from '../firebase'
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'

export default function Game () {

    const [ansArr, setAnsArr] = useState([])
    const [fail, setFail] = useState(false)
    const [complete, setComplete] = useState(false)
    const [levelCount, setLevelCount] = useState(1)
    const [expectation, setExpectation] = useState(Math.floor(3 + (levelCount / 5))) 
    const [initialTime, setInitialTime] = useState(Math.floor(20 - (levelCount * 0.8)))
    const [reset, setReset] = useState(false)
    const [clickCount, setClickCount] = useState(0)
    const [name, setName] = useState('')
    const [displayArr, setDisplayArr] = useState([])

    if(ansArr.length === expectation){
        setAnsArr([])
        setLevelCount(levelCount + 1)
        setExpectation(Math.floor(3 + (levelCount / 4)))
        setReset(true)
        setClickCount(0)
    }
    
    function resetLevel () {
        setAnsArr([])
        setClickCount(0)
    }

    function resetGame () {
        setAnsArr([])
        setExpectation(Math.floor(3 + (levelCount / 5)))
        setLevelCount(1)
        setFail(false)
        setReset(true)
        setClickCount(0)
    }

    function GameOver () {

        return (
            <>
                <p>Game Over!</p>
                <form >
                    <label for="name" >Try again, or enter your name to add it to the leaderboard!</label>
                    <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>

                    <button type="submit" onClick={handleNew}>Submit Score!</button>
                </form>
            </>
        )
    }

    const handleNew = async (e) => {
        e.preventDefault()
        const collectionRef = collection(db, 'leaderboard');
        const payload = {Name: name, Level: levelCount}
        await addDoc(collectionRef, payload);
      }

    return (
        <>
            <div>
                
                <div  className="side-by-side">
                    <h3 >Level: {levelCount}</h3>

                <div >
                    <CountdownTimer style={{width: '40%'}} fail={fail} setFail={setFail} initialTime={initialTime} reset={reset} setReset={setReset} levelCount={levelCount}/>
                </div>
                </div>
                <Numbers setAnsArr={setAnsArr} ansArr={ansArr} setFail={setFail} fail={fail} levelCount={levelCount} clickCount={clickCount} setClickCount={setClickCount} expectation={expectation} setComplete={setComplete}/>
                <div style={{border: '2px solid blue'}}>
                <div className='ansArr'>
                    {ansArr.map((item) => {
                        return (
                            <>
                                <li key={item} style={{display: 'inline-block', border: '2px solid blue', listStyle: 'none', padding: '5px', margin: '5px'}}>{item}</li>
                            </>
                            ) 
                        })}
                </div>
            </div>
            <div>
                {fail === true ? <GameOver /> : null}
            </div>

            <div>
                <p>Numbers Required: {expectation}</p>
            </div>

            
            <div>
                <button disabled={fail} onClick={() => {resetLevel()}} style={{border: '2px solid black', margin: '10px'}}>Reset Level</button>
                <button onClick={() => {resetGame()}} style={{border: '2px solid black', margin: '10px'}}>Reset Game</button>

                </div>
            </div>
            
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/">Back   </Link>
        </>
    )
}