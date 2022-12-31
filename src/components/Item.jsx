import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <div className="card col-3 col-lg-2 bg-white m-3 card-producto">
            <Link className="nn" to={`/item/${props.id}`}>
            <div className="card-body p-1">
                <Link className="cardtitulo">{props.nombre}</Link>
                <img src={props.foto} className="col-11 cardimagen" alt={props.nombre}/>
                <p className="cardprecio">USD {props.precio}</p>
            </div>
            </Link>
        </div>
    )
}
export default Item;