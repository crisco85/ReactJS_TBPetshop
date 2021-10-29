import React from "react";
import './Loader.scss';
import { Spinner } from "react-bootstrap";


export const Loader = () =>{

    return(
        <div>
            <Spinner animation="border" role="status">
                    <span className="visually-hidden mispinner">Loading...</span>
            </Spinner>
        </div>
    )
}