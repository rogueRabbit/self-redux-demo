import React, { Component } from 'react';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import ScenicForm from '../views/scenicForm/index';

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={ScenicForm}></Route>
            </Router>
        )
    }

}

export default RouterMap;
