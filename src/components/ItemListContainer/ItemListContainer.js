import React, { useContext, useEffect, useState } from "react";
import { Itemlist } from "./ItemList";
import { useParams } from "react-router";
import { UIContext } from "../../Context/UIContext";
import { Loader } from "../Loader/Loader";
import { getFireStore } from "../../firebase/config";


export const ItemListContainer = () => {

    const[items, setItems] = useState();
    
    const {loading, setLoading} = useContext(UIContext);

    const {categoryId} = useParams();  //Desestructuro lo que necesito

    useEffect(() =>{
        setLoading(true)

        const db = getFireStore();

        // hago mi validación por categorias
        const productos = categoryId
                          ?  db.collection('productos').where('category', '==', categoryId)
                          :  db.collection('productos')
        
            productos.get()
                .then((response) =>{
                    const newItems = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                    
                    setItems(newItems)

                })

                .catch((err) => console.log(err))
                .finally(() => {
                    setLoading(false) 
                }) 
            
    }, [categoryId, setLoading])  //categoryId como dependencia y setLoading

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