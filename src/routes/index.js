import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ScenicForm from '../views/scenicForm/index';

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ScenicForm}></Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap;
