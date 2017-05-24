/**
 * Created by vcarmignac on 24/5/17.
 */
import defaultApi from "./default";

class TextOverlayApi extends defaultApi {
    static path() {
        return '/text-overlay';
    }

    static fetchTextOverlays() {
        return fetch(this.url(),
            this.options())
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.error('Was not able to fetch TextOverlay data');
                console.error(error);
                return error;
            });

    }
}

export default TextOverlayApi