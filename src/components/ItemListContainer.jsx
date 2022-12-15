import { useEffect, useState } from "react";
import ItemList from './ItemList'
import { data } from '../utils/data'
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCat } = useParams();


    useEffect(() => {
        if (idCat){
            customFetch(2000, data.filter(item => item.category == idCat))
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        }else{
            customFetch(2000, data)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        }
        
    }, [idCat])

    return(
    <>
        <ItemList datos={datos}/>
    </>
    )
}

export default ItemListContainer;