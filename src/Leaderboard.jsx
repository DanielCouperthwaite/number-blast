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

            { scores && scores.map((score, index) => {
                return (
                <li style={{border: '2px solid black', borderRadius: '10px', margin: '10px', listStyle: 'none', display: 'flex', }} key={index}>
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

            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/">Back   </Link>
        </>
    )
}