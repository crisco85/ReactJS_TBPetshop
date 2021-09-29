import React from "react";

export const ItemListContainer = (props) => {

    //const {greeting} = props;
    console.log(props.greeting);

    return(
        <div className="itemlistcontainer">
            <p>{props.greeting}</p>
        </div>
    )
}