import React from "react";

export const ItemCount = ( {rcantidad, rsetCantidad, rstock} ) => {

    const handleRestar = () => {
        if(rcantidad > 0){
            rsetCantidad(rcantidad - 1)
        }
    }

    const handleSumar = () => {
        if(rcantidad < rstock){
            rsetCantidad(rcantidad + 1)
        }
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={handleRestar}>-</button>
            <span className="mx-3">{rcantidad}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
        </div>
    )
}