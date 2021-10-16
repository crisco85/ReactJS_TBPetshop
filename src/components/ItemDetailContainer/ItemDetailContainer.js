import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemDetail } from "./ItemDetail";
import './ItemDetailContainer.scss';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(false);

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true)

        pedirProductos()
            .then( res => {
                setItem (res.find( prod => prod.id === Number(itemId)))
            })

            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className="container itemDetail">
            {
                loading ? 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> 
                :
                <ItemDetail {...item}/>
            }

        </div>
    )
}