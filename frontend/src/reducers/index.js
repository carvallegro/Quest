import {combineReducers} from 'redux'
import map from './map'
import menu from './menu'
import posts from './posts'
import textOverlays from './textOverlays'
import postContent from './postContent'

const reducers = combineReducers({
    map,
    menu,
    posts,
    textOverlays,
    postContent
});

export default reducers;
