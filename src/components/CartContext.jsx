import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [Totalcompra, setTotalcompra] = useState(0)
    const [CantProductos, setCantProductos] = useState(0)

    const calccanttotal = (cantidad) => {
        let contador = cantidad + CantProductos
        setCantProductos(contador);
    }
    const calcpreciototal = (precio, cantidad) => {
        let contador = precio * cantidad + Totalcompra
        setTotalcompra(contador);
    }
    const clear = () => {
        let nuevocarrito = []
        setCartList(nuevocarrito)
        setTotalcompra(0)
        setCantProductos(0)
    }
    const deleteItem = (id) => {
        let resultado = cartList.filter(item => item.id != id)
        let totalnuevo = 0
        let cantidadnuevo = 0
        resultado.map(item => totalnuevo += item.preciototal) 
        resultado.map(item => cantidadnuevo += item.cantidad) 
        setTotalcompra(totalnuevo)
        setCantProductos(cantidadnuevo)
        setCartList(resultado)

    }

    const addToCart = (item) => {

        let found = cartList.find(product => product.id === item.id)

        if (found === undefined){      
        setCartList([
            ...cartList,
            {
                id: item.id,
                clase: item.clase,
                category: item.category,
                abreviado: item.abreviado,
                nombre: item.nombre,
                color: item.color,
                precio: item.precio,
                foto: item.foto,
                cantidad: item.cantidad,
                preciototal: item.precio * item.cantidad
            }
            ])

    }else{
        found.cantidad = found.cantidad + item.cantidad
        found.preciototal = found.preciototal + item.precio * item.cantidad
        setCartList([...cartList])
    }

    }
    return(
    <CartContext.Provider value={{cartList, addToCart, calcpreciototal, deleteItem, Totalcompra, calccanttotal, CantProductos, clear}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;