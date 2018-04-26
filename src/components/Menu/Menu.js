import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import './Menu.css';

export const Menu = (props) => (
    <div className="menu-container visible">
        <div className="menu-container-header">
            <button className="close-button hide-text" onClick={props.handleClick}>
                Close
            </button>
            <h2 className="menu-header">Мой профиль</h2>
        </div>

        <BrowserRouter>
            <nav className="menu">
                <ul>
                    <li className="menu-item">
                        <Link to="/" className="link">Настройки профиля</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/favorites" className="link">Избранное</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/announcement" className="link">Мои объявления</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="" className="link">Мои сделки</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="" className="link exit">Выход</Link>
                    </li>
                </ul>
            </nav>
        </BrowserRouter>
    </div>
);


