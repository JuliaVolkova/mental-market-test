import React, { Fragment } from 'react';
import './Favorites.css';

export const Favorites = () => (
    <Fragment>
        <div className="favorites-header">
            <h2 className="favorites-title">Избранное</h2>
            <p>Показать всё</p>
        </div>
        <div className="main-container">
            <ul className="favorites">
                <li className="favorites-item">
                    <span className="favorites-item-text">Бытовая техника</span>
                    <button type="button" className=" like-button hide-text">
                        Мне нравится
                    </button>
                </li>
            </ul>
            <button className="add-button">Добавить еще</button>
        </div>
    </Fragment>
);
