import * as types from '../actions/actionTypes'

const initialState = {
    open: false,
    expand: false
};

function postContent(state = initialState, action) {
    switch (action.type) {
        case types.POST_CONTENT_OPEN:
            return Object.assign({}, state, {
                open: action.open
            });
        case types.POST_CONTENT_EXPAND:
            return Object.assign({}, state, {
                expand: action.expand
            });
        default:
            return state;
    }
}

export default postContent;