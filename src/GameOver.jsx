import { useState } from "react"
import db from '../firebase'
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom"

export default function GameOver ({levelCount}) {

    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [feedback, setFeedback] = useState('')

    const handleNew = async (e) => {
        e.preventDefault()
        if(name.length !== 0){
            const collectionRef = collection(db, 'leaderboard');
            const payload = {Name: name, Level: levelCount}
            await addDoc(collectionRef, payload);
            setFeedback("Score Submitted!")
            setSubmitted(true)
            setName('')
        } else {
            setFeedback("Please enter your name to submit score!")
        }
      }

    return (
        <>
            <h2 style={{color:"red"}}>Game Over!</h2>
            <form style={{margin: '10px', padding: '20px'}}>
                <label style={{color: "lightPink"}} htmlFor="name" >Try again, or enter your name to add it to the leaderboard!</label>
                <div>
                {submitted === true ? null :<input style={{margin: '10px', padding: '20px', backgroundColor: "lightPink"}} id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>}
                </div>
                {submitted === true ? null : <button type="submit" disabled={submitted} onClick={handleNew} style={{border: '2px solid black', margin: '10px', padding: '10px', backgroundColor: "lightPink", color: "black"}}>Submit Score!</button>}
            </form>
            <p style={{color: "cyan"}}>{feedback}</p>
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', fontSize: '1em', color:"black", margin: '10px', padding: "10px", backgroundColor: "cyan", opacity: "0.85"}} to="/leaderboard">Check the Leaderboard   </Link>
        </>
    )
}