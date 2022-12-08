import { useEffect, useState } from "react"
import { customFetch } from "../utils/customFetch"
import { data } from "../utils/data"

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    useEffect(() => {
        customFetch(2000, data[0])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [])
    return(
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer