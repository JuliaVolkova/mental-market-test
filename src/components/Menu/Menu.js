import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Menu.css';

export const Menu = () => (
    <Fragment>
        <button className="menu-button hide-text">
            Menu
        </button>
        <Router>
            <nav className="menu">
                <ul>
                    <li className="menu-item">
                        <Link className="link" to="">Настройки профиля</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="">Избранное</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="">Мои объявления</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="">Мои сделки</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="">Выход</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    </Fragment>
);


