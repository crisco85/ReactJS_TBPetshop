import React, { useContext, useEffect, useState } from "react";
import './ItemListContainer.scss';
import { pedirProductos } from "../../helpers/pedirProductos";
import { Itemlist } from "./ItemList";
import { useParams } from "react-router";
import { CartContext } from "../../Context/CartContext";
import { UIContext } from "../../Context/UIContext";
import { Loader } from "../Loader/Loader";
import { getFireStore } from "../../firebase/config";

//query params
//const URL = 'https://www.google.com/search?q=coderhouse%limit=10'



export const ItemListContainer = () => {

    const[items, setItems] = useState();
    
    const {loading, setLoading} = useContext(UIContext);

    const contexto = useContext(CartContext);  //tengo que decirle que contexto voy a consumir

    console.log(items);

    //const params = useParams();
    const {categoryId} = useParams();  //Desestructuro

    useEffect(() =>{
        setLoading(true)

        const db = getFireStore();

        const productos = db.collection('productos');

        productos.get()
            .then((response) =>{
                console.log(response.docs)
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                
                setItems(newItems)

            })

            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false) 
            }) 

        /* setLoading(true)

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
            }) */
            
    }, [categoryId, setLoading])  //categoryId como dependencia

    //render con earle return

    return(
        <section className="container">

            {loading 
                ? 
                <Loader />
                : 
                <Itemlist productos={items}/>
            }
            <hr/>
        </section>
    )
}