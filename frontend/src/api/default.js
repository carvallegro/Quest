export default class defaultApi {
    static BASE_URL = process.env.REACT_APP_API_HOST + '/api';

    static DEFAULT_FETCH_OPTIONS = {
        method: 'GET'
    };

    static url() {
        return this.BASE_URL + this.path();
    }

    static path() {
        throw new Error('You have to overload the path() method !');
    }

    static options(additionalOptions = {}) {
        return Object.assign({}, this.DEFAULT_FETCH_OPTIONS, additionalOptions);
    }
}