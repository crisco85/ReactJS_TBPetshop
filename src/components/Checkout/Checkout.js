import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import Swal from 'sweetalert2';
import { CartContext } from "../../Context/CartContext";
import { UIContext } from "../../Context/UIContext";
import { Loader } from "../Loader/Loader";
import { generarOrden } from "../../firebase/generarOrden";
import './Checkout.scss';

export const Checkout = () => {

    const { loading, setLoading } = useContext(UIContext);

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    const [values, setValues] = useState( {
        nombre: '',
        apellido: '',
        dni: '',
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

        if(values.nombre.length < 3){
            Swal.fire({
                icon: 'error',
                title: 'Nombre incorrecto o mal ingresado',
                text: 'Por favor ingrese su nombre correctamente',
              })
            return
        }

        if(values.apellido.length < 3){
            Swal.fire({
                icon: 'error',
                title: 'Apellido incorrecto o mal ingresado',
                text: 'Por favor ingrese su apellido correctamente',
              })
            return
        }

        if(values.telefono.length < 8){
            Swal.fire({
                icon: 'error',
                title: 'DNI incorrecto',
                text: 'Por favor ingrese su DNI correctamente',
              })
            return
        }

        if(values.telefono.length < 3){
            Swal.fire({
                icon: 'error',
                title: 'Telefono incorrecto o mal ingresado',
                text: 'Por favor ingrese su telefono correctamente',
              })
            return
        }

        const validarEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if(!validarEmail.exec(values.email)){
            Swal.fire({
                icon: 'error',
                title: 'Email incorrecto o mal ingresado',
                text: 'Por favor ingrese su email correctamente',
              })
            return
        }

        setLoading(true)
        generarOrden(values, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden registrada correctamente',
                    text: `Por favor, guarde su número de orden: ${res}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'El producto solicitado no cuenta con stock',
                    text: `No hay stock del producto: ${err.map(el => el.name).join()}`,
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return(
        <>
            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loader />}

            <div>
                <div className="container my-5">
                <h2>Resumen de mi compra</h2>
                <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            className="form-control my-2"
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleInputChange}
                        />
                        <input 
                            className="form-control my-2"
                            type="text"
                            placeholder="Apellido"
                            name="apellido"
                            value={values.apellido}
                            onChange={handleInputChange}
                        />
                        <input 
                            className="form-control my-2"
                            type="tel"
                            placeholder="DNI"
                            name="dni"
                            value={values.dni}
                            onChange={handleInputChange}
                        />
                        <input 
                            className="form-control my-2"
                            type="tel"
                            placeholder="Telefono"
                            name="telefono"
                            value={values.telefono}
                            onChange={handleInputChange}
                        />
                        <input 
                            className="form-control my-2"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />

                        <button className="btn btn-success" type="submit" disabled={loading}>Finalizar</button>
                    </form>
                </div>
            </div>
        </>
    )
}