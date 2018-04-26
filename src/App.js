import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import './App.css';
import { Main } from "./components/Main/Main";


class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <Router>
                <Route exact path="/" component={Main} />
                {/*<Route path="/favorites" component={Favorites} />*/}
                {/*<Route path="/announcement" component={Announcement} />*/}
            </Router>
        </Fragment>
    );
  }
}

export default App;
