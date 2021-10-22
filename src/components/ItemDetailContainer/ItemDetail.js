import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "@restart/ui/esm/Button";
import './ItemDetail.scss';
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({id, name, price, img, description, category, stock}) => {
    
    const {goBack, push} = useHistory();

    const {addToCart} = useContext(CartContext)

    //Aca tengo que controlar la cantidad, para eso utilizo un useState()
    const [cantidad, setCantidad] = useState(0); //Lo inicializo en cero "0"
    
    const handleAgregar = () => {
        const newProduct = {
            id, 
            name, 
            price, 
            category, 
            cantidad,
            stock
        }

        if(cantidad > 0){
            addToCart(newProduct) 
        }

    return (
        <div className="container">
            <hr/>
            <h2>Detalle de Producto</h2>
            <div className="mycardetail">
                <Card style={{ width: '18rem' }}>
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
                        <ItemCount rcantidad={cantidad} rsetCantidad={setCantidad} rstock={stock}/>
                        <button className="btn btn-success" onClick={handleAgregar}>Agregar</button>
                        <hr/>
                        <button className="btn btn-primary" onClick={() => goBack()}>Volver</button>
                        <button className="btn btn-primary" onClick={() => push("/")}>Inicio</button>
                    </Card.Body>
                </Card>

            </div>
        </div>

    )
}