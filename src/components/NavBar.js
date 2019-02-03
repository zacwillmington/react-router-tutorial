import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-tabs">
                    <li class="nav-item active">
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    </li>
                    <li class="nav-item active">
                    <NavLink className='nav-link' to="/About">About</NavLink>
                    </li>
                    <li class="nav-item active">
                    <NavLink className='nav-link' to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;