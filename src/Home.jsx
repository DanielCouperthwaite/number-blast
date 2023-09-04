import { Link } from 'react-router-dom'
import './App.css'

export default function Home () {

    return (
        <>
            <h1>Number Blast!</h1>
            <div>
                <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em',  color:"black", margin: '10px', padding: "10px"}} to="/play">Play!   </Link>
                <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px"}} to="/leaderboard">Leaderboard   </Link>
                <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px"}} to="/instructions">Instructions   </Link>
                <Link className="link" style={{display: 'inline-block', border: '5px solid black', fontSize: '1.7em', color:"black", margin: '10px', padding: "10px"}} to="/about">About  </Link>
            </div>
        </>
    )
}