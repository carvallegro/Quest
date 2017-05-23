import scriptLoader from 'react-async-script-loader';
import textOverlay from './TextOverlay/_textOverlay';
import placeMarker from './PlaceMarker/_placeMarker';
import mapLine from './MapLine/_mapLine';

/*global google*/
class GoogleMap {
}

GoogleMap.Native = class {
    static LatLng(lat, lng) {
        return new google.maps.LatLng(lat, lng);
    }

    static Map(map, opts) {
        return new google.maps.Map(map, opts);
    }

};

GoogleMap.Custom = class {
    static TextOverlay(map, position, text, textSize) {
        return new (textOverlay())(map, position, text, textSize);
    }

    static PlaceMarker(map, position, type, onClick) {
        return new (placeMarker())(map, position, type, onClick);
    }

    static MapLine(map, from, to) {
        return new (mapLine())(map, from, to);
    }
};

export default scriptLoader([
    'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAP_API_KEY + '&libraries=drawing'
])(GoogleMap);

