import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import ItemModalCart from './ItemModalCart'
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

const Cart = () => {
    const usarrcontext = useContext(CartContext)

    const createOrder = () => {
        const order = {
            comprador: {
                nombre: 'Juan',
                email: 'abcd@gmail.com',
                telefono: '099123456'
            },
            fecha: serverTimestamp(),
            items: usarrcontext.cartList.map(item => ({
                id: item.id,
                title: item.nombre,
                price: item.preciototal,
                qty: item.cantidad
            })),
            total: usarrcontext.Totalcompra
        }
        const generarorder = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef
        }
        generarorder()
            .then(result => {
                usarrcontext.cartList.forEach(async (item) => {
                const itemRef = doc(db, "productos", item.id);
                await updateDoc(itemRef, {
                stock: increment(-item.cantidad)
                });
                })
                usarrcontext.clear()            
            })
            .catch(err => console.log(err))
    

    }
    
    return (
    <>
    <section className='d-flex'>
    <ul className='col-8'>
        {
            usarrcontext.cartList.length === 0 
            ?<p>Carrito vacio</p>
            : usarrcontext.cartList.map(item => <ItemModalCart key={item.id} preciototal={item.preciototal} id={item.id} nombre={item.nombre} precio={item.precio} cantidad={item.cantidad} foto={item.foto}/>)
        }
    </ul>
    <div id='Cart_detalle' className='d-flex flex-column justify-content-between'>
        <div id='Cart_detalle_header' className='bg-black h-25'>
            <h2>Detalle de compra</h2>
        </div>
        <div id='Cart_detalle_body' className='m-0 p-0 h-50'>
            <ul className='col-12 w-100 d-flex flex-column justify-content-around'>
                <li>Subtotal: USD <span>{Math. trunc(usarrcontext.Totalcompra / 1.22)}</span></li>
                <li>I.V.A.:   <span>{Math. trunc(usarrcontext.Totalcompra - usarrcontext.Totalcompra / 1.22 )}</span></li>
                <li>Descuentos: 0</li>
                <li>Total compra:   <span>{usarrcontext.Totalcompra}</span></li>
            </ul>
        </div>
        <div id='Cart_detalle_footer' className='h-25'>
            <button onClick={createOrder} className='col-12 h-100'>
                Checklist
            </button>
        </div>
    </div>
    </section>
    </>
  )
}

export default Cart