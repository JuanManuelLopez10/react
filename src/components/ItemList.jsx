import Item from "./Item";

const ItemList = (props) => {

    return(
        <>
    {
        props.map(item => <Item key={item.id} nombre={item.nombre}/>)
    }
        </>
    )
}

export default ItemList;