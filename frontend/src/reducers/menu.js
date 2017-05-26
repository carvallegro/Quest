const initialState = {
    open: false
};

function menu(state = initialState, action) {
    switch (action.type) {
        case 'MENU_TOGGLE':
            return Object.assign({}, state, {
                open: !state.open
            });
        case 'MENU_OPEN':
            return Object.assign({}, state, {
                open: action.open
            });
        default:
            return state;
    }
}

export default menu;
