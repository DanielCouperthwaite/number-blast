import { Link } from 'react-router-dom'
import './App.css'

export default function Home () {

    return (
        <>
            <h1>Number Blast!</h1>
            <Link className="link" style={{border: '5px solid black', fontSize: '2em', color:"black", margin: '10px', padding: "10px"}} to="/play">Play!   </Link>
        </>
    )
}