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

export const addMultiplesPosts = posts => {
    return {
        type: 'ADD_MULTIPLE_POSTS',
        posts: posts
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

/**
 * First async method
 */
import postApi from '../api/post';

export function loadPosts() {
    return function (dispatch) {
        return postApi.fetchPosts().then(posts =>
            dispatch(addMultiplesPosts(posts))
        ).catch(error => {
            throw(error)
        })
    }
}