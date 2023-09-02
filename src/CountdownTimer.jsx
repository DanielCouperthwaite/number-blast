import { useState, useEffect, useRef } from "react";

export default function CountdownTimer ({fail, setFail, initialTime, reset, setReset}) {

    
    let [seconds, setSeconds] = useState(initialTime);

    
    useEffect(() => {
        let intervalId;

            if(reset === false){
                intervalId = setInterval(() => {

                setSeconds((seconds) => {
                    if(seconds <= 0){
                        clearInterval(intervalId)
                        setFail(true)
                        return 0
                    } 
                    return seconds - 1
                })
            }, 1000)
            } else {
                setSeconds(initialTime)
                setReset(false)
            }
            

        return () => {
                clearInterval(intervalId)
        }
    }, [initialTime, reset, setReset, setFail])


    return (
        <>
            {seconds}
        </>
    )
}