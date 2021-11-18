import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { GoTrashcan } from "react-icons/go";
import { Link, Redirect } from "react-router-dom";
import './ItemListCart.scss';

export const ItemlistCart = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)

    //uso un ternario para validar si mi carrito tiene algo y en base a eso visualizo
    return (
        <div className="container">

            { carrito.length === 0 
                ?   <>
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
                                    <div className="listcart">
                                        <div className="detallescart">
                                            <h4>Producto: {prod.name}</h4>
                                            <h4>Cantidad: {prod.cantidad}</h4>
                                            <h4>Precio: {prod.price * prod.cantidad}</h4>
                                        </div>
                                        <div>
                                            <img src={prod.img}/>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger" 
                                                onClick={() => removeItem(prod.id)}>
                                                    <GoTrashcan />
                                            </button>
                                        </div>
                                    </div>
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