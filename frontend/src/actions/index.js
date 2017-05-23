export const toggleMenu = () => {
    return {
        type: 'TOGGLE_MENU'
    };
};

export const addPost = post => {
    return {
        type: 'ADD_POST',
        post: post
    };
};

export const setMapPost = (post = null) => {
    return {
        type: 'SET_MAP_POST',
        post: post
    };
};

export const displayPostContent = (post = null) => {
    return {
        type: 'SHOW_POST_CONTENT',
        post: post
    }
};