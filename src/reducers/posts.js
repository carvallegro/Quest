function posts(state = [], action) {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ];
        case 'ADD_MULTIPLE_POSTS':
            return [
                ...state,
                ...action.posts
            ];
            break;
        default:
            return state;
    }
}

export default posts;