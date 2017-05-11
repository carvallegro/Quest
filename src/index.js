import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './modules/App'
import reduxApp from './reducers/'
import './index.css'

import dataPosts from './data_post.json';

let store = createStore(reduxApp);
store.dispatch({
    type: 'ADD_MULTIPLE_POSTS',
    posts: dataPosts
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
