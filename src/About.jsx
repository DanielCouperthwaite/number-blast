import { Link } from "react-router-dom"
import site from "../src/assets/site.png"
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

import about from "../src/assets/about.png"


export default function About () {

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


    <img src={about} ></img>

    <div className="about-page" style={{justifyContent: "justify", borderRadius: "10px", backgroundColor: "#EAFFFF", opacity: "0.9"}}>
      {/* <h2>About Number Blast</h2> */}
      
      <div style={{padding: "5px"}}>

      <p>
        Welcome to Number Blast, a reaction based number game designed to test your speed against the clock!
      </p>
      <p>
        This web app built in Javascript with React and powered by Firebase.
      </p>


      <h4>Get in Touch</h4>
      <p>
        I'm excited to hear from you! If you'd like to discuss my work on Number Blast or have any questions, please don't hesitate to reach out.
      </p>

      <div style={{display: 'flex'}}>
        <a style={{padding: '5px', margin: '5px'}} href={"https://danielcouperthwaite.tech/"} target="_blank">
        <img style={{height: '31px'}} src={site}></img>
      </a>
        <a style={{paddingTop: '7px', marginTop: '8px'}} href={"https://danielcouperthwaite.tech/"} target="_blank">danielcouperthwaite.tech</a>
      </div>
      <div style={{display: 'flex'}}>
        <a style={{padding: '5px', margin: '5px'}} href={"https://github.com/DanielCouperthwaite"} target="_blank">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="></img>
      </a>
        <a style={{paddingTop: '7px', marginTop: '8px'}} href={"https://github.com/DanielCouperthwaite"} target="_blank">DanielCouperthwaite</a>
      </div>
      <div style={{display: 'flex'}}>
        <a style={{padding: '5px', margin: '5px'}} href={"https://www.linkedin.com/in/daniel-couperthwaite-209290139/"} target="_blank">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="></img>
        </a>
        <a style={{paddingTop: '7px', marginTop: '8px'}} href={"https://www.linkedin.com/in/daniel-couperthwaite-209290139/"} target="_blank">Daniel Couperthwaite</a>
      </div>
      
      

        


      <p>
        Thanks for visiting. I look forward to connecting with you soon!
      </p>

      <a target="_blank" href="https://icons8.com/icon/3685/globe">Website Symbol</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
        
          <div>
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', marginBottom: '40px', padding: "10px", backgroundColor: "cyan", opacity: "0.85"}} to="/">Back   </Link>
          </div>

          </div>
          
        </>
    )
}