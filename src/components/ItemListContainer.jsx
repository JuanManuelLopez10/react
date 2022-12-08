import { useState, useEffect } from "react"
import ItemList from "./Item"
import { data } from "../utils/data"
import { customFetch } from "../utils/customFetch"

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    
    useEffect(() => {
        customFetch(2000, data)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        }, [])

    return(
        <ItemList datos={datos}/>
    )
}
export default ItemListContainer;