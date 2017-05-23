import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './modules/App'
import reduxApp from './reducers/'
import './index.css'

import dataPosts from './data_post.json'
import dataTextOverlays from './data_text_overlay.json'

let store = createStore(reduxApp);
store.dispatch({
    type: 'ADD_MULTIPLE_POSTS',
    posts: dataPosts
});
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
