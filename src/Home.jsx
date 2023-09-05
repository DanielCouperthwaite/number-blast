import { Link } from 'react-router-dom'
import './App.css'

export default function Home () {

    return (
        <>
            <h1>Number Blast!</h1>
            <div>
                <div>
                    <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px", minWidth: '200px'}} to="/play">Play!   </Link>
                </div>
                <div>
                    <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px", minWidth: '200px'}} to="/leaderboard">Leaderboard   </Link>
                </div>
                <div>
                    <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px", minWidth: '200px'}} to="/instructions">Instructions   </Link>
                </div>
                <div>
                    <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px", minWidth: '200px'}} to="/about">About  </Link>
                </div>
               
            
            </div>
        </>
    )
}