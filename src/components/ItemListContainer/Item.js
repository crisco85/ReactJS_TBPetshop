import React from "react";
import './Item.scss';
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Item = ({id, name, description, price, img, category}) =>{

    return(
        <div className="mycards">
            <Card>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <hr/>
                    <Card.Text>Categoria: {category}</Card.Text>
                    <Card.Text>Descripción: {description}</Card.Text>
                    <Card.Text>Precio: $ {price}</Card.Text>
                    <hr/>
                    <Link to={`/detail/${id}`}><Button variant="primary">Ver Detalle</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}