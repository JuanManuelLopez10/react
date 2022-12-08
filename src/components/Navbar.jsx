import CartWidget from './CartWidget';


const Navbar = () => {
    
    return(
        <>
        <header>
            <nav id="header" className="container-fluid d-flex justify-content-around animate__animated animate__fadeInDown">
                <div className="col-2 d-flex justify-content-center  align-items-center" id="divlogoheader">
                    <a href="./index.html" className="opcionclase">Motos Punta</a>
                </div>
                <div className="col-6 d-flex justify-content-around align-items-center">
                    <a href="./MOTOS.html" className="opcionclase">CUBS</a>
                    <a href="./CASCOS.html" className="opcionclase">SCOOTERS</a>
                    <a href="./INDUMENTARIA.html" className="opcionclase">CALLE-CUSTOM</a>
                    <a href="./ACCESORIOS.html" className="opcionclase">NAKED</a>
                </div>
                <CartWidget/>
            </nav>
        </header>
        </>
    )
}

export default Navbar;