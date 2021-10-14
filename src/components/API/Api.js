import React, { useEffect, useState } from "react";
import { getApi } from "./getApi";

export const Api = () =>{
    

    const [pokemon, setPokemon] = useState(null);
    const [id, setId] = useState(1);   //hacemos esto para que se inicialice en 1 el id
    const [busqueda, setBusqueda] = useState(''); //empezamos con un string vacio

    const handleSiguiente = () => {
        setId(id + 1)
    }
    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(busqueda.length > 2)
        {
            getApi(busqueda)
                .then(res => {
                    setPokemon(res)
                    setId(res.id)
                })
                
                /* .catch(err => {
                    setPokemon(err)
                }) */

        }
    }

    //peticion a la API
    //fetch(url, obj)
    useEffect(() => {
        setPokemon(null);

        getApi(id)
            .then(res => {
                setPokemon(res)
            })
        
    }, [id])  //agrego la dependencia para que cada vez que cambie la misma se va a volver a ejecutar el fetch
    
    return(
        <div className="container my-5">
            <h2>API</h2>
            <hr/>

            {
                !pokemon ? <h3>Cargando....</h3> : 
                <>
                    <h3>{pokemon.nombre}</h3>
                    <img src={pokemon.img} alt={pokemon.nombre}/>
                </>
            }

            <button className="btn btn-primary" onClick={handleAnterior}>Anterior</button>
            <button className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>

            <hr/>
            <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" value={busqueda} onChange={handleInputChange}>

                </input>
            </form>
            

        </div>
    )
}