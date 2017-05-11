import {combineReducers} from 'redux'
import menu from './menu'
import posts from './posts'

const reduxApp = combineReducers({
    menu,
    posts
});

export default reduxApp;
