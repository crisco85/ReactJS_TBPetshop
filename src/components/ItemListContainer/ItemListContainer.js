import React, { useEffect, useState } from "react";
import './ItemListContainer.scss';
import { pedirProductos } from "../../helpers/pedirProductos";
import { Itemlist } from "./ItemList";
import { useParams } from "react-router";

//query params
//const URL = 'https://www.google.com/search?q=coderhouse%limit=10'



export const ItemListContainer = () => {

    const[items, setItems] = useState();
    const[loading, setLoading] = useState(false);

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
                ? <h2>Cargando.....</h2> 
                : <Itemlist productos={items}/>
            }
            <hr/>
        </section>
    )
}