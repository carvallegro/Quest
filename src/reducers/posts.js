import PinTypes from '../modules/PinTypes'

function post(state = {}, action) {
    switch (action.type) {
        case 'ADD_POST':
            const place = action.place;
            return {
                id: action.id,
                date: new Date(action.date),
                type: action.type,
                title: place.title,
                content: action.content,
                isContentVisible: false,
                place: {
                    id: place.id,
                    title: place.title,
                    showTitle: place.showTitle,
                    pinType: PinTypes.enumValueOf(place.pinType.toUpperCase()),
                    position: place.position
                }
            };
        case 'SHOW_POST_CONTENT':
            return Object.assign({}, state, {
                isContentVisible: action.post.id === state.id
            });
        default:
            return state;
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                post(undefined, Object.assign({}, action.post, {
                    type: 'ADD_POST'
                }))
            ];
        case 'ADD_MULTIPLE_POSTS':
            return [
                ...state,
                ...action.posts.map(p => post(undefined, Object.assign({}, p, {
                    type: 'ADD_POST'
                })))
            ];
        case 'SHOW_POST_CONTENT':
            return state.map(p => post(p, action));
        default:
            return state;
    }
}

export default posts;