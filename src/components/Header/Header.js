import React, {Component} from 'react';
import { Menu } from "../Menu/Menu";
import './Header.css';

export class Header extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isCollapsed: true
        }
    }

    handleClick() {
        this.setState({isCollapsed: !this.state.isCollapsed});
    }

    render() {
        const collapsed = this.state.isCollapsed;
        return (
            <header className="header">
                <button className={ `hide-text ${collapsed ? "menu-button" : "close-button" }`}
                        onClick={this.handleClick}>
                    {collapsed ? 'Menu' : 'Close'}
                </button>
                {collapsed ? null : <Menu handleClick={this.handleClick}/>}
                <img src={process.env.PUBLIC_URL + 'img/logo.svg'} alt="mental house logo" width="50%" height="20%"/>
                <div className="avatar hide-text">аватар пользователя"</div>
            </header>
        )
    }
}
