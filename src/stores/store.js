import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as scenic from './scenicItem/reducer';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers({...scenic}),
    applyMiddleware(thunk)
)

export default store;