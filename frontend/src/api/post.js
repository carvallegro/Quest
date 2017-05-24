import defaultApi from "./default";

class PostApi extends defaultApi {

    static path() {
        return '/post';
    }

    static fetchPosts() {
        return fetch(this.url(),
            this.options()).then(response => {
            return response.json();
        }).catch(error => {
            console.error('Was not able to fetch posts data');
            console.error(error);
            return error;
        });

    }
}

export default PostApi;