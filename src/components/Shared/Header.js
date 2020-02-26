import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
            <Logo />
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/">Write a post</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;