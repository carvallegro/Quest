import {combineReducers} from 'redux'
import map from './map'
import menu from './menu'
import posts from './posts'
import textOverlays from './textOverlays'

const reducers = combineReducers({
    map,
    menu,
    posts,
    textOverlays
});

export default reducers;
