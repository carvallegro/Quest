import textOverlayApi from '../api/text-overlay'
import * as types from './actionTypes'

export const addMultipleTextOverlays = textOverlays => {
    return {
        type: types.TEXT_OVERLAY_ADD_MULTIPLE,
        textOverlays: textOverlays
    }
};

export function loadTextOverlays() {
    return dispatch => textOverlayApi.fetchTextOverlays().then(textOverlays =>
        dispatch(addMultipleTextOverlays(textOverlays))
    ).catch(error => {
        throw(error)
    });
}


