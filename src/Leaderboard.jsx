import { Link } from "react-router-dom"
import { useEffect, useState, useCallback } from "react"
import db from "../firebase"
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import leaderboard from "../src/assets/leaderboard.png"

export default function () {

    const [scores, setScores] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
      
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

    useEffect(() => {
        onSnapshot(collection(db, 'leaderboard'), (snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data())
            data.sort((a, b) => b.Level - a.Level)
            const leaders = data.slice(0, 10)
            setScores(leaders)
            setIsLoading(false)
        })
      }, [db])
    
    
    if(isLoading === true){
        return (
            <>
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
                                                    value:70,
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
                                                    value: { min: 5, max: 150 },
                                                },
                                            },
                                            detectRetina: true,
                                        }}
                                    />
                        </div>

                        <img style={{width: "250px"}} src={leaderboard}></img>

                        <h2 style={{color: "cyan"}}>Loading...</h2>

                        <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px", backgroundColor: "cyan", opacity: "0.85"}} to="/">Back   </Link>
            </>
        )
    }


    return (
        <>

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
                                                    value:70,
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
                                                    value: { min: 5, max: 150 },
                                                },
                                            },
                                            detectRetina: true,
                                        }}
                                    />
                        </div>

            <img style={{width: "250px"}} src={leaderboard}></img>

            


                {scores && scores.map((score, index) => {
                return (
                    <li style={{border: '2px solid black', borderRadius: '10px', margin: '10px', listStyle: 'none', display: 'flex', backgroundColor: "lightCyan", opacity: "0.9"}} key={index}>
                        <h3 style={{padding: '5px', margin: '10px'}}>{index + 1}.</h3>
                        <div style={{width: '30%'}}>
                            <p style={{padding: '7px', margin: '10px'}}>{score.Name} </p>
                        </div>
                        <div>
                            <p style={{padding: '7px', margin: '10px'}}>Level: {score.Level}</p>
                        </div>
                    </li>
                    )
            })}
            

            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px", backgroundColor: "cyan", opacity: "0.85"}} to="/">Back   </Link>
        </>
    )
}