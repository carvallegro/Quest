import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import map from './reducers/map'
import menu from './reducers/menu'
import posts from './reducers/posts'
import textOverlays from './reducers/textOverlays'
import postContent from './reducers/postContent'

const reducers = combineReducers({
    map,
    menu,
    posts,
    textOverlays,
    postContent
});

export default function configureStore() {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
};
