import { Link } from "react-router-dom";

const Item = (props) => {

    return(
        <div className="card col-2 bg-white m-3 d-flex flex-column align-items-center">
                        <img src={props.foto} className="col-10" alt={props.nombre}/>
                        <div className="card-body">
                            <div className="col-12">
                                <Link to={`/item/${props.id}`}>{props.nombre}</Link>
                            </div>
                            <div className="col-12">
                                <p className="card-text">USD {props.precio}</p>
                            </div>
                        </div>

        </div>
    )
}
export default Item;