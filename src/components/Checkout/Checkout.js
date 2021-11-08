import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export const Checkout = () => {

    const { carrito } = useContext(CartContext);

    const [values, setValues] = useState( {
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    } );

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const orden = {
            buyer: {
                ...values
            },
            items:
        }
    }

    return(
        <div>
            <div className="container my-5">
            <h2>Resumen de mi compra</h2>
            <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                        className="form-control my-5"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                    />
                    <input 
                        className="form-control my-5"
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleInputChange}
                    />
                    <input 
                        className="form-control my-5"
                        type="tel"
                        placeholder="Telefono"
                        name="telefono"
                        value={values.telefono}
                        onChange={handleInputChange}
                    />
                    <input 
                        className="form-control my-5"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />

                    <button className="btn btn-success" type="submit">Finalizar</button>
                </form>
            </div>
        </div>
    )
}