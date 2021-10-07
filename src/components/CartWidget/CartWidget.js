import React from "react";
//import Carrito from './Carrito.png';
import './CartWidget.scss';
import { FiShoppingCart } from "react-icons/fi";

export const CartWidget = () =>{

    return(
        <>
            <FiShoppingCart className="Carrito_imagen"/>
        </>
    )
}