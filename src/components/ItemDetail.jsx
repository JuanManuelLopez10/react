import { useContext } from "react"
import { CartContext } from "./CartContext"


const ItemDetail = ({item}) => {
    const { addToCart, calcpreciototal, calccanttotal } = useContext(CartContext)
    const aa = () => {
    addToCart(item)
    calcpreciototal(item.precio, item.cantidad)
    calccanttotal(item.cantidad, item.id)
    }
    const restar = () => {
        let itemcantidad = document.getElementById('itemcantidad')
        if (item.cantidad>=2) {
            item.cantidad--
            itemcantidad.innerText= "Cantidad: " + item.cantidad
        }
    }
    const sumar = () => {
        if (item.cantidad < item.stock) {
            let itemcantidad = document.getElementById('itemcantidad')
            item.cantidad++
            itemcantidad.innerText= "Cantidad: " + item.cantidad
        }
        
    }

    return(
        <>
        {
            <div className="col-12 d-flex flex-wrap justify-content-around">
                <img className="col-5" src={item.foto} alt="" />
                <div className="col-5">
                    <h1 className="col-12">{item.nombre}</h1>
                    <h3 className="col-12">USD {item.precio}</h3> 
                    <p>{item.descripcion}</p>
                    <div className="d-flex">
                        <h5 id="itemcantidad" className="col-3">Cantidad: {item.cantidad}</h5>
                        <button onClick={sumar}>+</button>
                        <button onClick={restar}>-</button>
                    </div>  
                    <button id='botonagregar' onClick={aa}>Agregar al carrito</button>
                    <h5 className="col-5">Stock: <span id="stockdisponible">{item.stock}</span></h5>

                </div>
 
            </div>
        }
        </>
    )
}

export default ItemDetail;