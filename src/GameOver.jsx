import { useState } from "react"
import db from '../firebase'
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'

export default function GameOver ({levelCount}) {

    const [name, setName] = useState('')

    const handleNew = async (e) => {
        e.preventDefault()
        const collectionRef = collection(db, 'leaderboard');
        const payload = {Name: name, Level: levelCount}
        await addDoc(collectionRef, payload);
        setName('')
      }

    return (
        <>
            <p>Game Over!</p>
            <form >
                <label for="name" >Try again, or enter your name to add it to the leaderboard!</label>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>

                <button type="submit" onClick={handleNew}>Submit Score!</button>
            </form>
        </>
    )
}