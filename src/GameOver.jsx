import { useState } from "react"
import db from '../firebase'
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom"

export default function GameOver ({levelCount}) {

    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleNew = async (e) => {
        e.preventDefault()
        const collectionRef = collection(db, 'leaderboard');
        const payload = {Name: name, Level: levelCount}
        await addDoc(collectionRef, payload);
        setSubmitted(true)
        setName('')
      }

    return (
        <>
            <h2>Game Over!</h2>
            <form style={{margin: '10px', padding: '20px'}}>
                <label style={{color: "lightPink"}} for="name" >Try again, or enter your name to add it to the leaderboard!</label>
                <div>
                    <input style={{margin: '10px', padding: '20px'}} id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <button type="submit" disabled={submitted === true} onClick={handleNew} style={{border: '2px solid black', margin: '10px', padding: '10px', backgroundColor: "lightPink", color: "lightPink"}}>Submit Score!</button>
            </form>
            {submitted === true ? <p>Score Submiited!</p> : null}
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', fontSize: '1em', color:"black", margin: '10px', padding: "10px", backgroundColor: "cyan", opacity: "0.85"}} to="/leaderboard">Check the Leaderboard   </Link>
        </>
    )
}