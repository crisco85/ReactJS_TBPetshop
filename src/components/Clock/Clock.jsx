import React, { useState, useEffect } from "react";
import './Clock.scss';

export const Clock = () => {
    const [time, setTime] = useState (new Date());

    /* const handleTime = () =>{
        setTime( new Date())
        console.log(time)
    } */

    useEffect(() => {  //trabaja con lo siglos de vida de mi componente
                
        setTimeout (() => {  //solo se ejecuta en el montaje, por ejemplo llamado a la api
            setTime (new Date())
        }, 1000)

    }, [time]) //array de dependencia, sirve para decirle a useEffect que se quede escuchando, una variable o varias
 
    return(
        <div className="clock">
            <h3>{time.toLocaleString()}</h3>
        </div>
    )
}