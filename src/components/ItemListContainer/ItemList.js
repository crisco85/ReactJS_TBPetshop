import React from "react";
import './ItemList.scss';
import { Item } from "./Item";

export const Itemlist = ({productos = []}) => {

    return(
        
        <div className="container">
            <h2>Catálogo de productos</h2>
            <hr/>

            <div className="row">
                {productos.map((item) => <Item {...item} key={item.id}/>)}
            </div>

        </div>
    )
}