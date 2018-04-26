import React, { Fragment } from 'react';
import './Announcement.css';

export const Announcement = () => (
    <Fragment>
        <div className="announcement-header">
            <h2 className="favorites-title">Иои объявления</h2>
            <p>Показать всё</p>
        </div>
        <div className="main-container">
            <p className="message">У вас пока нет объявлений, хотите создать?</p>
            <ul className="announcement"> </ul>
            <button className="add-button">Добавить еще</button>
        </div>
    </Fragment>
);
