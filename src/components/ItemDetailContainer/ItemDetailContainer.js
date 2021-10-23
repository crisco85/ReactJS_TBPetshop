import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UIContext } from "../../Context/UIContext";
import { pedirProductos } from "../../helpers/pedirProductos";
import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import './ItemDetailContainer.scss';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    
    const {loading, setLoading} = useContext(UIContext);

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
                <Loader />
                :
                <ItemDetail {...item}/>
            }

        </div>
    )
}