import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ScenicForm from '../views/scenicFrom/index';
import Home from '../views/home/index';

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ScenicForm}></Route>
                    <Route path='/scenicList' component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap;
