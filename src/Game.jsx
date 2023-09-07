import { useState, useCallback } from "react"
import Numbers from './Numbers'
import CountdownTimer from './CountdownTimer'
import GameOver from "./GameOver"
import { Link } from "react-router-dom"
import './App.css'
import db from '../firebase'
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function Game () {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
      
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

    const [ansArr, setAnsArr] = useState([])
    const [fail, setFail] = useState(false)
    const [complete, setComplete] = useState(false)
    const [levelCount, setLevelCount] = useState(1)
    const [expectation, setExpectation] = useState(Math.floor(2 + (levelCount)))
    const [empties, setEmpties] = useState(new Array(Math.floor(2 + (levelCount))).fill(''))
    const [initialTime, setInitialTime] = useState(Math.floor(20 - (levelCount * 0.3)))
    const [reset, setReset] = useState(false)
    const [clickCount, setClickCount] = useState(0)
    const [displayArr, setDisplayArr] = useState([])

    if(ansArr.length === expectation){
        setAnsArr([])
        setLevelCount(levelCount + 1)
        setExpectation(Math.floor(2 + (levelCount)))
        setReset(true)
        setClickCount(0)
        setEmpties(new Array(Math.floor(2 + (levelCount))).fill(''))
        setComplete(true)
        setTimeout(() => {
            setComplete(false);
          }, 300);
    }
    
    function resetLevel () {
        setAnsArr([])
        setClickCount(0)
        setEmpties(new Array(Math.floor(2 + (levelCount))).fill(''))
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

    let colour = "#ADFF2F"
    if(complete === true){
        colour = "#ADFF2F"        
    } else {
        colour = "red"
    }

    return (
        <>
            <div>

            <div style={{zIndex: '-40', position: 'fixed'}}>
                <Particles 
                            id="tsparticles"
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={{
                                // background: {
                                //     color: {
                                //         value: "#000000",
                                //     },
                                // },
                                fpsLimit: 120,
                                interactivity: {
                                    events: {
                                        onClick: {
                                            enable: true,
                                            mode: "push",
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        push: {
                                            quantity: 4,
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4,
                                        },
                                    },
                                    
                                },
                                collisions: {
                                enable: true,
                                mode: 'bounce',
                            },
                                particles: {
                                color: {
                                    value: [
                                    
                                    
                                    //green
                                    // "#bfff73",
                                    
                                    // //cyan
                                    // "#5FFFFF",
                                    //yellow
                                    // "#FFDD2B",
                                    //pink
                                    "#FF49B3",
                                    "#FF0000", 
                                    // Red
                                    // "#FF7F00", // Orange
                                    // "#FFFF00", // Yellow
                                    // "#00FF00", // Green
                                    "#0000FF", // Blue
                                    "#4B0082", // Indigo
                                    "#8B00FF"  // Violet
                                    ]
                                },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        // outModes: {
                                        //     default: "bounce",
                                        // },
                                        random: false,
                                        speed: 3,
                                        straight: false,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            area: 800,
                                        },
                                        value:150,
                                    },
                                    opacity: {
                                        value: 0.8,
                                    },
                                    shape: {
                    character: [
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "1",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "2",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "3",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "4",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "5",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "6",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "7",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "8",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "9",
                        weight: "400"
                        },
                        {
                        fill: true,
                        font: "Helvetica",
                        style: "",
                        value: "0",
                        weight: "400"
                        },
                        
                    ],
                    image: {
                        height: 100,
                        replace_color: true,
                        src: "images/github.svg",
                        width: 100
                    },
                    polygon: { nb_sides: 5 },
                    stroke: { color: "random", width: 1 },
                    type: "char"
                    },
                                    size: {
                                        value: { min: 5, max: 20 },
                                    },
                                },
                                detectRetina: true,
                            }}
                        />
            </div>
                
                <div  className="side-by-side">
                    {/* <h3 >Level: {levelCount}</h3> */}

                <div >
                    <CountdownTimer style={{width: '40%'}} fail={fail} colour={colour} setFail={setFail} initialTime={initialTime} reset={reset} setReset={setReset} levelCount={levelCount}/>
                </div>
                </div>
                <div>
                    {fail === true ? <GameOver levelCount={levelCount} /> : <Numbers setAnsArr={setAnsArr} ansArr={ansArr} setFail={setFail} fail={fail} levelCount={levelCount} clickCount={clickCount} empties={empties} setEmpties={setEmpties} setClickCount={setClickCount} expectation={expectation} setComplete={setComplete}/>}
                </div>
                
                
                    {fail === true ? null :<div style={{border: `3px solid ${colour}`, borderRadius: '10px', minHeight: '70px'}}><div className='ansArr'>{display.map((item) => { return ( <> <li key={item} style={{display: 'inline-block', border: `2px solid ${colour}`, color: `white`, borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li></>) })}</div></div>}
                
                

                <div style={{color: "lightCyan"}}>
                    {fail === true ? null : <p>Choose {expectation} numbers in ascending order!</p>}
                </div>

                
                <div>
                    <button disabled={fail} onClick={() => {resetLevel()}} style={{border: '2px solid black', margin: '5px', backgroundColor: "lightPink", opacity: "0.85"}}>Reset Level</button>
                    <button onClick={() => {resetGame()}} style={{border: '2px solid black', margin: '5px', backgroundColor: "lightPink", opacity: "0.85"}}>Reset Game</button>
                </div>
                
                <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '5px', padding: "8px", backgroundColor: "cyan", opacity: "0.85"}} to="/">Back   </Link>
                
            </div>
            
            
        </>
    )
}