import React, { useContext, useEffect, useState } from "react";
import './ItemListContainer.scss';
import { pedirProductos } from "../../helpers/pedirProductos";
import { Itemlist } from "./ItemList";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import { MiContext } from "../../Context/MiContext";

//query params
//const URL = 'https://www.google.com/search?q=coderhouse%limit=10'



export const ItemListContainer = () => {

    const[items, setItems] = useState();
    const[loading, setLoading] = useState(false);

    const contexto = useContext(MiContext);  //tengo que decirle que contexto voy a consumir

    console.log(items);

    //const params = useParams();
    const {categoryId} = useParams();  //Desestructuro

    useEffect(() =>{
        setLoading(true)

        pedirProductos()
            .then((res) => {
                if(categoryId){
                    setItems(res.filter (prod => prod.category === categoryId))
                } else {
                    setItems(res)
                }
                
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false) 
                console.log("Fin")
            })
            
    }, [categoryId])  //categoryId como dependencia

    

    return(
        <section className="container">

            {loading 
                ? 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                : 
                <Itemlist productos={items}/>
            }
            <hr/>
        </section>
    )
}