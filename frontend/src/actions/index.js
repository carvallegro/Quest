import * as types from './actionTypes'

export const toggleMenu = () => {
    return {
        type: types.MENU_TOGGLE
    };
};

export const openMenu = (open) => {
    return {
        type: types.MENU_OPEN,
        open: open
    }
};

export const addMultipleTextOverlays = textOverlays => {
    return {
        type: types.TEXT_OVERLAY_ADD_MULTIPLE,
        textOverlays: textOverlays
    }
};

export const addPost = post => {
    return {
        type: types.POST_ADD,
        post: post
    };
};

export const addMultiplesPosts = posts => {
    return {
        type: types.POST_ADD_MULTIPLE,
        posts: posts
    };
};

export const setMapPost = (postId = null) => {
    return {
        type: types.MAP_SET_POST,
        postId: postId
    };
};

export const openPostContent = (open = false) => {
    return {
        type: types.POST_CONTENT_OPEN,
        open: open
    }
};

export const expandPostContent = (expand = false) => {
    return {
        type: types.POST_CONTENT_EXPAND,
        expand: expand
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