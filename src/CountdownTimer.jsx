import { useState, useEffect, useRef } from "react";

export default function CountdownTimer ({setFail}) {

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
        setSeconds(seconds --)
    }

    if(seconds === 0){
        setFail(true)
    }

    return (
        <>
            00:0{seconds > 0 ? seconds : 0}
        </>
    )
}