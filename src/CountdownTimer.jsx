import { useState, useEffect, useRef } from "react";

export default function CountdownTimer ({fail, setFail, resetTimer, setResetTimer}) {

    let [seconds, setSeconds] = useState(7);
    const [nextSec, setNextSec] = useState(seconds - 1)
    const Ref = useRef


    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTime();
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    function updateTime () {
        console.log('hello')
        setSeconds(seconds => seconds - 1)
    }

    if(seconds === 0){
        setFail(true)
    }

    if(resetTimer === true){
        setResetTimer(false)
        
    }

    return (
        <>
            00:0{seconds}
        </>
    )
}