import React, { useContext } from "react";
import './CartWidget.scss';
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () =>{

    const { calcularCantidad } = useContext(CartContext)

    return(
        <div style={{
            display: calcularCantidad() === 0 ? "none" : "block", 
        }}>
            <div className="carrito">
                <FiShoppingCart className="carrito_imagen"/>
                <span className="carrito_cantidad">{calcularCantidad()}</span>
            </div>
        </div>
    )
}