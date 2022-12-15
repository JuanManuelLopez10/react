import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const Navbar = () => {
    
    return(
        <>
        <header>
            <nav id="header" className="container-fluid d-flex justify-content-between animate__animated animate__fadeInDown">
                <div className="col-2 d-flex justify-content-center  align-items-center" id="divlogoheader">
                <Link to='/'>MOTOS PUNTA</Link>
                </div>
                <div className="col-6 d-flex justify-content-around align-items-center">
                    <Link to='/category/1'>CUBS</Link>
                    <Link to='/category/2'>SCOOTERS</Link>
                    <Link to='/category/3'>CALLE-CUSTOM</Link>
                    <Link to='/category/4'>NAKED</Link>
                </div>
                <CartWidget/>
            </nav>
        </header>
        </>
    )
}

export default Navbar;