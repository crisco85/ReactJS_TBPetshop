import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { GoTrashcan } from "react-icons/go";
import { Link, Redirect } from "react-router-dom";



export const ItemlistCart = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)

    return (
        <div className="container">

            { carrito.length === 0 
                ?   <>
                        {/* <h2>No hay items agregados</h2>
                        <Link to="/" className="btn btn-primary">Listado de productos</Link> */}

                        <Redirect to="/"/>
                    </>
                   
                :
                    <>
                        <h2>Carrito de compras</h2>
                        <hr/>

                        {
                            carrito.map((prod) =>(
                                <>
                                    <hr/>
                                    <img src={prod.img}/>
                                    <h4>Producto: {prod.name}</h4>
                                    <h4>Cantidad: {prod.cantidad}</h4>
                                    <h4>Precio: {prod.price * prod.cantidad}</h4>
                                    <button className="btn btn-danger" 
                                        onClick={() => removeItem(prod.id)}>
                                            <GoTrashcan />
                                        </button>
                                    <hr/>
                                </>
                            ))
                        }

                        <hr/>
                            <h3 className="my-5">Precio total: ${calcularTotal()}</h3>
                        <hr/>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <Link to="/checkout" className="btn btn-success mx-3">Terminar mi compra</Link>

                    </>    
            }

        </div>
    )
}