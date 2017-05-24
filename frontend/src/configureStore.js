import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'


export default function configureStore() {
    // TODO : find out why there's a warning
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
};
