import PinTypes from '../modules/PinTypes'
import * as types from '../actions/actionTypes'

function post(state = {}, action) {
    switch (action.type) {
        case types.POST_ADD:
            const place = action.place;
            return {
                id: action.id,
                date: new Date(action.date),
                type: action.type,
                title: action.title,
                content: action.content,
                place: {
                    id: place.id,
                    title: place.title,
                    showTitle: place.showTitle,
                    pinType: PinTypes.enumValueOf(place.pinType.toUpperCase()),
                    position: place.position
                }
            };
        default:
            return state;
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case types.POST_ADD:
            return [
                ...state,
                post(undefined, Object.assign({}, action.post, {
                    type: types.POST_ADD
                }))
            ];
        case types.POST_ADD_MULTIPLE:
            return [
                ...state,
                ...action.posts.map(p => post(undefined, Object.assign({}, p, {
                    type: types.POST_ADD
                })))
            ];
        default:
            return state;
    }
}

export default posts;