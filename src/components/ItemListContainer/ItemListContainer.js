import React, { useEffect, useState } from "react";
import './ItemListContainer.scss';
import { pedirProductos } from "../../helpers/pedirProductos";
import { Itemlist } from "./ItemList";

export const ItemListContainer = () => {

    const[items, setItems] = useState([]);
    const[loading, setLoading] = useState(false);

    console.log(items);

    useEffect(() =>{
        setLoading(true)

        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false) 
                console.log("Fin")
            })
            
    }, [])

    

    return(
        <section className="container">

            {loading 
                ? <h2>Cargando.....</h2> 
                : <Itemlist productos={items}/>
            }
            <hr/>
        </section>
    )
}