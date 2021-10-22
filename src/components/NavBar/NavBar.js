import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import Logo from './Logo3.png';
import './NavBar.scss';

export const NavBar = () => {
    return(
        <header>
            <nav className="nav-menu">
                <div className="logo-titulo">
                    <Link to="/">
                        <img src={Logo} className="logo-imagen"/>
                    </Link>
                </div>
                <div>
                    <ul>
                        <li><NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/productos/alimento">Alimento</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/productos/higiene">Higiene</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/productos/juguete">Juguetes</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink></li>
                        <li><Link to="/cart"><CartWidget /></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}