import React from "react";
import './Item.scss';
import {Card, Button} from 'react-bootstrap';

export const Item = (props) =>{

    return(
        <div className="mycards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text>Precio: $ {props.price}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}