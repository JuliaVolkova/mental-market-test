import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Menu.css';

export const Menu = () => (
    <div className="menu-container">
        <div className="menu-container-header">
            <button className="close-button hide-text">
                Close
            </button>
            <h2>Мой профиль</h2>
        </div>

        <Router>
            <nav className="menu">
                <ul>
                    <li className="menu-item">
                        <Link  to="/" className="link">Настройки профиля</Link>
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
        </Router>
    </div>
);


