import React, { Fragment } from 'react';
import './Main.css';

export const Main = () => (
    <Fragment>
        <div className="favorites-header">
            <h2 className="favorites-title">Избранное</h2>
            <button type="button" className=" like-button hide-text">Мне нравится</button>
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
