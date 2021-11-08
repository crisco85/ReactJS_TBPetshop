import React, { useContext } from "react";
import { UserAuthContext } from "../../Context/UserAuthContext";

export const UserAuthenticate = () =>{

    const { setIsAuthenticated } = useContext(UserAuthContext);
    
    const handleSubmit = () =>{
        setIsAuthenticated(true);
    }

    return(
        <>
            <div className="container">
                <h2>Por favor logueate para poder ingresar</h2>
                <hr/>

                <div className="row">
                    <button onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </>
    )
}