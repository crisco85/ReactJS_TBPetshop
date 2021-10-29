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
            <button
                className={`btn ${rcantidad === 0 ? "btn-danger desactivado" : "btn-primary"}`} 
                onClick={handleRestar}
                >-
            </button>
            <span className="mx-2">{rcantidad}</span>
            <button
                className={`btn ${rcantidad === rstock ? "btn-danger desactivado" : "btn-primary"}`}  
                onClick={handleSumar}
                >+
            </button>
        </div>
    )
}