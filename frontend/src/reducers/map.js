/**
 * Created by vcarmignac on 19/5/17.
 */
function map(state = {}, action) {
    switch (action.type) {
        case 'SET_MAP_POST':
            return Object.assign({}, {
                post: action.post
            });
        default:
            return state;
    }
}

export default map;