import React from 'react'
import animate from 'animate.css'
import swal from 'sweetalert'

const ItemContador = (props) => {
    let articulo = props.item
    articulo.cantidad = 1

    let carrito = JSON.parse(localStorage.getItem('carrito'))
    if (carrito){
        console.log(carrito);
    }else{
        carrito = []
    }

    return (
        <>
            <div id='contador'>
                <p id='cantidad'>{articulo.cantidad}</p>
                <button onClick={props.suma}>+</button>
                <button onClick={props.resta}>-</button>
            </div>
        </>
        )
}

export default ItemContador