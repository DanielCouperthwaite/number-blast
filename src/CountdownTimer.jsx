import { useState, useEffect } from "react";

export default function CountdownTimer ({fail, setFail, initialTime, reset, setReset, levelCount}) {

    
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
            } else if(fail === true){
                setSeconds(0)
            } else {
                setSeconds(Math.floor(initialTime - (levelCount * 0.7)))
                setReset(false)
            }
            

        return () => {
                clearInterval(intervalId)
        }
    }, [initialTime, reset, setReset, setFail, fail])


    return (
        <>
            <p style={{fontSize: 30, margin: 5}}>{fail === true ? '00:00' : seconds > 9 ? `00:${seconds}` : `00:0${seconds}`}</p>
        </>
    )
}