import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Main.css'


const Navbar = () => {
    return (
        <div>
            <header class="header">
                <div class="container">
                    <div class="header__body">
                        <div class="header__burger">
                            <span></span>
                        </div>
                        <nav class="header__menu">
                            <ul class="header__list">
                                <NavLink className='navlink' exact to="/">Главное</NavLink>
                                <NavLink className='navlink' exact to="/description">Описание</NavLink>
                                <NavLink className='navlink' exact to="/lessons">Уроки</NavLink>

                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;





