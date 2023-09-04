import { Link } from "react-router-dom"

export default function () {

    return (
        <>
            <h1>Leaderboard</h1>
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/">Back   </Link>
        </>
    )
}