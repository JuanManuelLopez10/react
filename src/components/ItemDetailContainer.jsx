import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";
const { data } = require('../utils/data')

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({})
    const { idItem } = useParams();

    useEffect(() => {
        
        customFetch(2000, data.find(item => item.id == idItem))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [])
    
    return(
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;