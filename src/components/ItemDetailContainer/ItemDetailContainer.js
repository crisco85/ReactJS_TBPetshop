import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UIContext } from "../../Context/UIContext";
import { getFireStore } from "../../firebase/config";
//import { pedirProductos } from "../../helpers/pedirProductos";
import { Loader } from "../Loader/Loader";
import { ItemDetail } from "./ItemDetail";
import './ItemDetailContainer.scss';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    //const [error, setError] = useState();
    
    const {loading, setLoading} = useContext(UIContext);

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true)

        const db = getFireStore();
        const productos = db.collection('productos');
        const item = productos.doc(itemId);

        item.get()
            .then((doc) => {
                //setError(false)

                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })

            /* .catch(() => {
                setError(true)
            }) */
            .finally(() => {
                setLoading(false)
            })


        /* pedirProductos()
            .then( res => {
                setItem (res.find( prod => prod.id === Number(itemId)))
            })

            .finally(() => {
                setLoading(false)
            }) */

    }, [itemId, setLoading])

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