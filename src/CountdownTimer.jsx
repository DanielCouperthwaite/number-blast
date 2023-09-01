import { useState, useEffect, useRef } from "react";

export default function CountdownTimer ({fail, setFail, reset, setReset}) {

    const [initialTime, setInitialTime] = useState(25)
    let [seconds, setSeconds] = useState(initialTime);

    
    useEffect(() => {
        let intervalId = setInterval(() => {
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