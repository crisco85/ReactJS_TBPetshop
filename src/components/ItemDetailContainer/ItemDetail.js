import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import './ItemDetail.scss';
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({id, name, price, img, description, category, stock}) => {
    
    const {goBack, push} = useHistory();

    const {addToCart, isInCart} = useContext(CartContext)

    //Aca tengo que controlar la cantidad, para eso utilizo un useState()
    const [cantidad, setCantidad] = useState(0); //Lo inicializo en cero "0"
    
    const handleAgregar = () => {
        const newProduct = {
            id, 
            name, 
            price, 
            category, 
            cantidad,
            stock,
            img
        }

        if(cantidad > 0){
            addToCart(newProduct) 
        }
    }

    return (
        <div className="container">
            <hr/>
            <h2>Detalle de Producto</h2>
            <div className="mycardetail">
                <Card>
                    <Card.Title>{name}</Card.Title>
                    <Card.Body>
                        <Card.Img variant="top" src={img} />
                        <Card.Text>
                            Descripción: {description}
                        </Card.Text>
                        <Card.Text>
                            Categoria: {category}
                        </Card.Text>
                        <Card.Text>
                            Precio: $ {price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        
                    </Card.Body>  
                    <Card.Body>
                        <hr/>
                                <div className={isInCart(id) && "desactivado"}>
                                    <ItemCount rcantidad={cantidad} rsetCantidad={setCantidad} rstock={stock}/>
                                    <button
                                        disabled={cantidad === 0}
                                        className={isInCart(id) ? "btn btn-danger mx-2" : "btn btn-success mx -2"} 
                                        onClick={handleAgregar}
                                        >Agregar
                                    </button>
                                </div>

                                <Link to="/cart" className={isInCart(id) ? "btn btn-success" : "btn btn-success desactivado"}
                                    >Terminar mi compra
                                </Link> 
                        <hr/>
                        
                        <button className="btn btn-primary" onClick={() => goBack()}>Volver</button>
                        <button className="btn btn-primary" onClick={() => push("/")}>Inicio</button>
                    </Card.Body>
                </Card>

            </div>
        </div>

    )
}