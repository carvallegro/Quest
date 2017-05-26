import * as types from '../actions/actionTypes'

const initialState = {
    open: false
};

function menu(state = initialState, action) {
    switch (action.type) {
        case types.MENU_TOGGLE:
            return Object.assign({}, state, {
                open: !state.open
            });
        case types.MENU_OPEN:
            return Object.assign({}, state, {
                open: action.open
            });
        default:
            return state;
    }
}

export default menu;
