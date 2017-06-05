import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import configureStore from './configureStore'
import {loadPosts} from './actions/post'
import {loadTextOverlays} from './actions/textOverlay'
import './index.css'


const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(loadTextOverlays());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
