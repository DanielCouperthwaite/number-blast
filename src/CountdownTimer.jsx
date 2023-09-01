import { useState, useEffect, useRef } from "react";

export default function CountdownTimer ({fail, setFail, resetTimer, setResetTimer}) {

    let [seconds, setSeconds] = useState(25);

    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((seconds) => {
                if(seconds <= 0){
                    clearInterval(intervalId)
                    return 0
                } 
                return seconds - 1
            })
        }, 1000)

        return () => {
                clearInterval(intervalId)
        }
    }, [])

    if(seconds === 0){
        setFail(true)
    }

    return (
        <>
            {seconds}
        </>
    )
}