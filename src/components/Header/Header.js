import React from 'react';
import './Header.css';
import { Menu } from "../Menu/Menu";

export const Header = () => (
    <header className="header hide-text">
        <Menu />
        <img src={process.env.PUBLIC_URL + 'img/logo.svg'} alt="mental house logo" width="50%" height="20%"/>
        <div className="avatar">аватар пользоватея"</div>
    </header>
);
