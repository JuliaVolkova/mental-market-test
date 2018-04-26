import React, { Component } from 'react';
import './Header.css';
import { Menu } from "../Menu/Menu";

export class Header extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isClicked: false
        }
    }

    handleClick() {
        this.setState({ isClicked: true });
    }

    render() {
        return(
            <header className="header">
                <button className="menu-button hide-text" onClick={this.handleClick}>
                    Menu
                </button>
                {this.state.isClicked ? <Menu style={{ display: 'block' }} /> : null}
                <img src={process.env.PUBLIC_URL + 'img/logo.svg'} alt="mental house logo" width="50%" height="20%"/>
                <div className="avatar hide-text">аватар пользователя"</div>
            </header>
        )
    }
}
