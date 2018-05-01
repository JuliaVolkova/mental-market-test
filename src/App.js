import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Favorites } from "./components/Favorites/Favorites";
import { Announcement } from "./components/Announcement/Announcement";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/announcement" component={Announcement} />
                </Switch>
            <Footer />
        </Fragment>
    );
  }
}

export default App;
