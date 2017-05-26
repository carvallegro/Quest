/**
 * Created by vcarmignac on 19/5/17.
 */
import * as types from '../actions/actionTypes'

function map(state = {}, action) {
    switch (action.type) {
        case types.MAP_SET_POST:
            return Object.assign({}, {
                postId: action.postId
            });
        default:
            return state;
    }
}

export default map;