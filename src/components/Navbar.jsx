import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const Navbar = () => {
    
    return(
        <>
        <header>
            <nav id="header" className="container-fluid d-flex justify-content-around animate__animated animate__fadeInDown">
                <div className="col-1 d-flex justify-content-center  align-items-center" id="divlogoheader">
                    <Link className='col-12' to='/'>
                        <img src="../assets/logos/logo_motos_punta_favicon.png" alt="Motos Punta" className='col-11'/>
                    </Link>
                </div>
                <div className="col-6 d-flex justify-content-around align-items-center">
                    <Link className='opcionclase' to='/category/1'>CUBS</Link>
                    <Link className='opcionclase' to='/category/2'>SCOOTERS</Link>
                    <Link className='opcionclase' to='/category/3'>CALLE-CUSTOM</Link>
                    <Link className='opcionclase' to='/category/4'>NAKED</Link>
                    <Link className='opcionclase' to='/category/5'>TOURING</Link>
                    <Link className='opcionclase' to='/category/6'>CAFERACER</Link>
                    <Link className='opcionclase' to='/category/7'>Ni idea</Link>
                </div>
                <CartWidget/>
            </nav>
        </header>
        </>
    )
}

export default Navbar;