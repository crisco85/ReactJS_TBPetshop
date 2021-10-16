import React from "react";
import './Item.scss';
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Item = ({id, name, description, price, img, category}) =>{

    return(
        <div className="mycards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Categoria: {category}</Card.Text>
                    <Card.Text>Descripción: {description}</Card.Text>
                    <Card.Text>Precio: $ {price}</Card.Text>
                    <Link to={`/detail/${id}`}><Button variant="primary">Ver Detalle</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}