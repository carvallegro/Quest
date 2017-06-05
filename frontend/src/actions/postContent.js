import * as types from './actionTypes'

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
