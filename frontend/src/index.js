import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './modules/App'
import configureStore from './configureStore'
import {loadPosts} from './actions'
import './index.css'

import dataTextOverlays from './data_text_overlay.json'

const store = configureStore();
store.dispatch(loadPosts());
store.dispatch({
    type: 'TEXT_OVERLAY_ADD_MULTIPLE',
    textOverlays: dataTextOverlays
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
