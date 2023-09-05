import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import db from "../firebase"
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'

export default function () {

    const [scores, setScores] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, 'leaderboard'), (snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data())
            data.sort((a, b) => b.Level - a.Level)
            const leaders = data.slice(0, 10)
            setScores(leaders)
        })
      }, [db])

    return (
        <>
            <h1>Leaderboard</h1>

            { scores && scores.map((score) => {
                return (
                <li style={{border: '2px solid black'}} key={score.Name}>
                    <p>Name:{score.Name}, </p>
                    <p>Level: {score.Level}, </p>
                </li>
                )
            })}

            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/">Back   </Link>
        </>
    )
}