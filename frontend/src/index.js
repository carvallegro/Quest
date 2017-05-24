import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './modules/App'
import configureStore from './configureStore'
import {loadPosts, loadTextOverlays} from './actions'
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
