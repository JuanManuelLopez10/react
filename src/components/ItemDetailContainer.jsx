import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import GrowExample from "./Spinner";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const { idItem } = useParams();

    useEffect(() => {
        const fetchIndividual = async() => {
            const docRef = doc(db, "productos", idItem);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            }
        }
        fetchIndividual()
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [])
    if (dato.id===undefined) {
        return(
            <GrowExample/>
        )
    }else{
    return(
        <ItemDetail item={dato}/>
    )
}
}

export default ItemDetailContainer;