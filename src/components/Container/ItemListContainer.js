import React from "react";
import './ItemListContainer.scss';

export const ItemListContainer = (props) => {

    //const {greeting} = props;
    console.log(props.greeting);

    return(
        <div className="ItemListContainer">
            <p>{props.greeting}</p>
        </div>
    )
}