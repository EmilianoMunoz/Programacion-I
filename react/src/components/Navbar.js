import React from 'react';
import logo from '../images/logoname.png';
import user from '../images/user.png';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#4C4F62'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">
                        <img src={logo} width="250px" height="110px" alt="Logo y nombre" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 justify-content-between align-items-end">
                            <li className="nav-item rounded mx-auto d-block sm-2">
                                <a className="nav-link active" aria-current="page" href="#"><h5>Reservas</h5></a>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <a className="nav-link active" aria-current="page" href="#"><h5>Membresías</h5></a>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <a className="nav-link active" aria-current="page" href="/#"><h5>Medios de pago</h5></a>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <a className="nav-link active" aria-current="page" href="/#"><h5>Nosotros</h5></a>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <a className="nav-link active" aria-current="page" href="/#"><h5>Contacto</h5></a>
                            </li>
                        </ul>
                        <div className="dropdown dropstart">
                            <button className="btn mx-auto" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user} height="40px" alt="usuario" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item" href="#">Mi Perfil</a></li>
                                <li><a className="dropdown-item" href="#">Seguridad</a></li>
                                <li><a className="dropdown-item" href="#">Menú administrador</a></li>
                                <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
