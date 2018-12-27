import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import RouterMap from './routes/index';
import './index.css';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <RouterMap />
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
