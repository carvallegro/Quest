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

export const setMapPost = (postId = null) => {
    return {
        type: types.MAP_SET_POST,
        postId: postId
    };
};