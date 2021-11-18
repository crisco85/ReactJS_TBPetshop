import { getFireStore } from './config';
import firebase from "firebase";
import 'firebase/firestore';

export const generarOrden = (datos, carrito, total) => {

    return new Promise(async (resolve, reject) => {
        //generamos nuestra orden
        const orden = {
            buyer: datos,
            items: carrito.map((ord) => ({id: ord.id, name: ord.name, precio: ord.price, cantidad: ord.cantidad})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        //enviamos la orden a firestore
        const db = getFireStore()
        const orders = db.collection('orders')
        
        //generamos el batch de actualizacion y armo la referencia a mi colección de ordenes y productos
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(el => el.id))

        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = carrito.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad){
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad})
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })

        if (outOfStock.length === 0){
            orders.add(orden)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
            })
        } else {
            reject(outOfStock)
        }
    })

}