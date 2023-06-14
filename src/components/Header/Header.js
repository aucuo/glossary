import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
import logoIcon from "./logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header className="menu">
                <div className="menu__logo">
                    <img src={logoIcon} alt="Site logo" />
                    <div className="menu__name">
                        <h1>Словарь идиостиля</h1>
                        <span>Амброза Гуиннета Бирса</span>
                    </div>
                </div>
                <div className="menu__items">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/offer">Предложить статью</NavLink>
                    <NavLink to="/sign">Вход</NavLink>
                </div>
            </header>
        )
    }
}

export default Header