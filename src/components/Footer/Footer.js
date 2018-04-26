import React, { Fragment } from 'react';
import './Footer.css';

export const Footer = () => (
    <Fragment>
        <section className="footer-list">
            <ul>
                <li className="footer-list-item"><a>Пользовательское соглашение</a></li>
                <li className="footer-list-item"><a>Справка и помощь</a></li>
                <li className="footer-list-item"><a>О сервисе</a></li>
                <li className="footer-list-item"><a>Обратная связь</a></li>
                <li className="footer-list-item"><cite><a>2018 SkatTrading</a></cite></li>
            </ul>
        </section>
    </Fragment>
);
