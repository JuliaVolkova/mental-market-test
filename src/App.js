import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/es/createBrowserHistory";
import { Header } from "./components/Header/Header";
import { Favorites } from "./components/Favorites/Favorites";
import { Announcement } from "./components/Announcement/Announcement";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <Router history={history}>
                <Switch>
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/announcement" component={Announcement} />
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
            <Footer />
        </Fragment>
    );
  }
}

export default App;
