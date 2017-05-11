export const toggleMenu = () => {
    return {
        type: 'TOGGLE_MENU'
    };
};

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post : post
    };
};