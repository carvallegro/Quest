import {combineReducers} from 'redux'
import map from './map'
import menu from './menu'
import posts from './posts'

const reduxApp = combineReducers({
    menu,
    posts,
    map
});

export default reduxApp;
