import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import './App.css';
import { Favorites } from "./components/Favorites/Favorites";
import { Announcement } from "./components/Announcement/Announcement";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <Router>
                <Switch>
                    {/*<Route exact path="/" component={Menu} />*/}
                    <Route exact path="/favorites" component={Favorites} />
                    <Route path="/announcement" component={Announcement} />
                </Switch>
            </Router>
        </Fragment>
    );
  }
}

export default App;
