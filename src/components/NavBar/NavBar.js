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
                    <img src={Logo} className="logo-imagen"/>
                    <h1>TB-PetShop</h1>
                </div>
                <div>
                    <ul>
                        <li><NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/productos">Productos</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/alimentos">Alimento</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/higiene">Higiene</NavLink></li>
                        <li><NavLink activeClassName={'activeLink'} exact to="/juguetes">Juguetes</NavLink></li>
                        <li><Link to="/cart"><CartWidget /></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}