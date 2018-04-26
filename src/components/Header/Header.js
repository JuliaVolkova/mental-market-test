import React from 'react';
import './Header.css';
import { Menu } from "../Menu/Menu";

export const Header = () => (
    <header className="header">
        <button className="menu-button hide-text">
            Menu
        </button>
        <Menu />
        <img src={process.env.PUBLIC_URL + 'img/logo.svg'} alt="mental house logo" width="50%" height="20%"/>
        <div className="avatar hide-text">аватар пользователя"</div>
    </header>
);
