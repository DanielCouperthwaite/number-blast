import { Link } from "react-router-dom"
import site from "../src/assets/site.png"

export default function About () {
    return (
        <>
    <div className="about-page" style={{justifyContent: "justify"}}>
      <h2>About Number Blast</h2>
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
    </div>
        
          <div>
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', marginBottom: '40px', padding: "10px"}} to="/">Back   </Link>
          </div>

          <a target="_blank" href="https://icons8.com/icon/3685/globe">Website Symbol</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </>
    )
}