

const ItemDetail = ({item}) => {
    return(
        <>
        {
            <div className="col-12 d-flex flex-wrap">
            <h1 className="col-12">{item.nombre}</h1>
            <img className="col-6" src={item.foto} alt="" /> 
            <h3 className="col-3">USD {item.precio}</h3>  
            </div>
        }
        </>
    )
}

export default ItemDetail;