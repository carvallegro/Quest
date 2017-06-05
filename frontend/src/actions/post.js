import postApi from '../api/post'
import * as types from './actionTypes'

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

export function loadPosts() {
    return dispatch => postApi.fetchPosts().then(posts =>
        dispatch(addMultiplesPosts(posts))
    ).catch(error => {
        throw(error)
    })
}

