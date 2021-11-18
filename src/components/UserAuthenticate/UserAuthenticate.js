import React, { useContext } from "react";
import { UserAuthContext } from "../../Context/UserAuthContext";
import './UserAuthenticate.scss';

export const UserAuthenticate = () =>{

    const { setIsAuthenticated } = useContext(UserAuthContext);
    
    const handleSubmit = () =>{
        setIsAuthenticated(true);
    }

    return(
        <>
            <div className="container">
                <h2>Por favor, logueate para poder ingresar</h2>
                <hr/>

                <div className="row">
                    <button className="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </>
    )
}