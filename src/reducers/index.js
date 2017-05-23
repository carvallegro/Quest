import {combineReducers} from 'redux'
import map from './map'
import menu from './menu'
import posts from './posts'
import textOverlays from './textOverlays'

const reduxApp = combineReducers({
    map,
    menu,
    posts,
    textOverlays
});

export default reduxApp;
