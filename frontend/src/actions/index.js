export const toggleMenu = () => {
    return {
        type: 'TOGGLE_MENU'
    };
};

export const addMultipleTextOverlays = textOverlays => {
    return {
        type: 'TEXT_OVERLAY_ADD_MULTIPLE',
        textOverlays: textOverlays
    }
}

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

import textOverlayApi from '../api/text-overlay'
import postApi from '../api/post';

export function loadTextOverlays() {
    return dispatch => textOverlayApi.fetchTextOverlays().then(textOverlays =>
        dispatch(addMultipleTextOverlays(textOverlays))
    ).catch(error => {
        throw(error)
    });
}

export function loadPosts() {
    return dispatch => postApi.fetchPosts().then(posts =>
        dispatch(addMultiplesPosts(posts))
    ).catch(error => {
        throw(error)
    })
}