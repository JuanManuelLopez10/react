import Item from "./Item";

const ItemList = (props) => {
    return(
        <>
        <div className="d-flex flex-wrap">
        {
        props.datos.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} foto={item.foto}/>)
        }
        </div>
        </>
    )
}

export default ItemList;