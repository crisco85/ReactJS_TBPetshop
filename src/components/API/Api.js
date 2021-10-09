import React, { useEffect, useState } from "react";

export const piA = () =>{
    

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState
    //peticion a la API
    //fetch(url, obj)

    const handleSiguiente = () => {

    }
    
    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then((res) => res.json())
        .then((data) => {   //hace referencia a la del JSON
            
            setPokemon({
                nombre: data.name,
                img: data.sprites.front_default
            })
        })   
    }, [])
    
    return(
        <div>
            <h2>API</h2>
            <hr/>

            {
                !pokemon ? <h3>Cargando....</h3> : 
                <>
                    <h3>{pokemon.nombre}</h3>
                    <img src={pokemon.img} alt={pokemon.nombre}/>
                </>
            }

            <button className="btn btn-primary" onClick={handleSiguiente}></button>

        </div>
    )
}