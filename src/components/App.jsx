import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Popular from "../pages/popular.jsx";
import Battle from "../pages/battle.jsx";



class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div style={{ marginLeft: '20px' }}>
                        <Link to="/">Popular</Link>
                        <Link to="/battle" style={{ marginLeft: '20px' }}>Battle</Link>
                    </div>
                    <hr />
                    <Route path="/" exact component={Popular} ></Route>
                    <Route path="/battle" component={Battle} ></Route>
                </div>
            </Router>
        )
    };

}
export default hot(App);
