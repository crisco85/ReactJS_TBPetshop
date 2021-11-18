import React, { createContext, useEffect, useState } from "react";

//si utilizaramos el localStorage
const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {
    
    const [carrito, setCarrito] = useState(init)

    const addToCart = (item) => {
        setCarrito( [...carrito, item] )
    }

    //me devuelve true o false, si mi item esta o no en el carrito
    const isInCart = (itemId) =>{
        return carrito.some((prod) => prod.id === itemId)
    }

    const removeItem = (itemId) =>{
        const newCart = carrito.filter( (prod) => prod.id !== itemId )
        setCarrito(newCart)
    } 

    //reduce: recorre un array y me retorna en este caso del acumulador + la cantidad de mis productos
    const calcularCantidad = () => {
        return carrito.reduce( (acumulador, prod) => acumulador + prod.cantidad, 0 )
    }

    const calcularTotal = () => {
        return carrito.reduce( (acumulador, prod) => acumulador + prod.price * prod.cantidad, 0)
    } 

    const vaciarCarrito = () =>{
        setCarrito([])
    }
  
    useEffect(() => {
        console.log(carrito)
        localStorage.setItem('carrito', JSON.stringify(carrito))

    }, [carrito])

    
    return(

        <CartContext.Provider value={ {
            carrito,
            addToCart,
            isInCart,
            removeItem,
            calcularCantidad,
            calcularTotal,
            vaciarCarrito
            } }>

                {children}
        </CartContext.Provider>

    )
}