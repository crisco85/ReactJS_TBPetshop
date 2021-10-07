import React, { useState } from "react";
import './Clock.scss';

export const Clock = () => {
    const [time, setTime] = useState (new Date());

    const updateTime = () =>{
        setTime( new Date())
        console.log(time)
    }

    return(
        <div onClick={updateTime}>
            <h3>{time.toLocaleString()}</h3>
        </div>
    )
}