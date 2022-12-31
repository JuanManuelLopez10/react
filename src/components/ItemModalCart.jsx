import { useContext } from "react";
import { CartContext } from "./CartContext";


const ItemModalCart = (props) => {
    const { deleteItem } = useContext(CartContext)

    const S = () => {
        deleteItem(props.id)
    }
    return(
        <>
        {
            <div className="col-12 d-flex">
                <div className="col-3">
                    <img className="col-12" src={props.foto} alt="" /> 
                </div>
                <div className="col-7 d-flex flex-wrap">
                    <h2 className="col-12 itemModalCartnombre">{props.nombre}</h2>
                    <h3 className="col-7 itemModalCartprecio">Precio: USD {props.precio}</h3>
                    <h4 className="col-5 itemModalCarttotal">Total: {props.preciototal}</h4>
                    <h4 className="col-5 itemModalCartcantidad">Cantidad: {props.cantidad}</h4> 
                    <button onClick={S}>Delete</button>
                </div>
            </div>
        }
        </>
    )
}

export default ItemModalCart;