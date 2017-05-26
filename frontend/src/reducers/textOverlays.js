import * as types from '../actions/actionTypes'

function textOverlay(state = {}, action) {
    switch (action.type) {
        case types.TEXT_OVERLAY_ADD:
            return {
                id: action.id,
                text: action.text,
                textSize: action.textSize,
                position: {
                    lat: action.position.lat,
                    lng: action.position.lng
                }
            };
        default:
            return state;
    }
}

function textOverlays(state = [], action) {
    switch (action.type) {
        case types.TEXT_OVERLAY_ADD:
            return [
                ...state,
                textOverlay(undefined, action)
            ];
        case types.TEXT_OVERLAY_ADD_MULTIPLE:
            return [
                ...state,
                ...action.textOverlays.map(to => Object.assign({}, to, {type: types.TEXT_OVERLAY_ADD}))
            ];
        default:
            return state;
    }
}

export default textOverlays;