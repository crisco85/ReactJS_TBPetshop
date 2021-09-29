import React from 'react';
import { CartWidget } from './CartWidget';
import Logo from './Logo.png';

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
                        <li><p>Alimento</p></li>
                        <li><p>Accesorios</p></li>
                        <li><p>Higiene</p></li>
                        <li><CartWidget/></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}