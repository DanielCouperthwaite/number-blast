import { Link } from 'react-router-dom'
import './App.css'

import { useState, useCallback } from 'react'
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import logo from "../src/assets/logo.png"

export default function Home () {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
      
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

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

            <img src={logo} style={{width: "270px"}}></img>

            <div>
                
                <div>
                    <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px", minWidth: '200px', backgroundColor: "cyan", opacity: "0.85"}} to="/instructions">Play!   </Link>
                </div>
                <div>
                    <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px", minWidth: '200px', backgroundColor: "cyan", opacity: "0.85"}} to="/leaderboard">Leaderboard   </Link>
                </div>
                <div>
                    <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px", minWidth: '200px', backgroundColor: "cyan", opacity: "0.85"}} to="/about">About  </Link>
                </div>
               
            
            </div>
        </>
    )
}