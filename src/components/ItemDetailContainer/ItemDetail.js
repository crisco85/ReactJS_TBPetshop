import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "@restart/ui/esm/Button";
import './ItemDetail.scss';

export const ItemDetail = ({id, name, price, img, description, category}) => {
    
    const {goBack, push} = useHistory();

    const addToCart = () => {
        const newProduct = {
            id, 
            name, 
            price, 
            category, 
            cantidad
        }
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
                    {/* <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup> */}
                    <Card.Body>
                        <hr/>
                        <button className="btn btn-primary" onClick={() => goBack()}>Volver</button>
                        <button className="btn btn-primary" onClick={() => push("/")}>Inicio</button>
                    </Card.Body>
                </Card>

            </div>
        </div>

    )
}