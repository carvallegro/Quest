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

const loadPostsAPI = () => {
    // Todo set the CORS problem
    return fetch(process.env.REACT_APP_API_HOST + '/api/post',
        {
            method: 'GET',
            mode: 'cors',
            header: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        }).then(response => {
        console.log(response);
        return response.json();
    }).catch(error => {
        console.error('Was not able to fetch posts data');
        console.error(error);
        return error;
    });
};

export function loadPosts() {
    return function (dispatch) {
        return loadPostsAPI().then(posts =>
            dispatch(addMultiplesPosts(posts))
        ).catch(error => {
            throw(error)
        })
    }
}