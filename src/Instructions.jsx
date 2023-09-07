import { Link } from "react-router-dom"

import { useCallback } from 'react'
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function Instructions () {


    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
      
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

    const display1 = [0, 2, 8]
    const display2 = [3, 3, 3, 3, 4]
    const display4 = [5, 0]
    const display5 = [7, 8, 9, 6]

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

            
            <div style={{borderRadius: "10px", backgroundColor: "#EAFFFF", opacity: "0.9"}}>
            <div style={{padding: "5px"}}>

            <h3>Welcome to Number Blast!</h3>

            <p> Simply choose numbers from the grid that go up in value. Each can be = or larger than the one before, but not smaller!</p>

            <div style={{margin: "15px"}}>
            <div style={{border: '3px solid black', borderRadius: '10px', minHeight: '70px'}}>
                <div className='ansArr'>{display1.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'green', fontSise: '50px'}}>✓</p>
                </div>
                <div className='ansArr'>{display2.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'green', fontSise: '50px'}}>✓</p>
                </div>
                <div className='ansArr'>{display4.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'red', fontSise: '50px'}}>X</p>
                </div>
                <div className='ansArr'>{display5.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'red', fontSise: '50px'}}>X</p>
                </div>
                
            </div>
            </div>

            <p>Sounds easy?</p>
            <p>As you progress you'll need to think fast to beat your high score and climb the global leaderboard!</p>
            
            {/* <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/">Back   </Link> */}
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px", backgroundColor: "cyan", opacity: "0.85"}} to="/play">Let's Go!   </Link>

            </div>
            </div>
        </>
    )
}