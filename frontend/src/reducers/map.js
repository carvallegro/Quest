/**
 * Created by vcarmignac on 19/5/17.
 */
function map(state = {}, action) {
    switch (action.type) {
        case 'MAP_SET_POST':
            return Object.assign({}, {
                postId: action.postId
            });
        default:
            return state;
    }
}

export default map;