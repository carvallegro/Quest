import React from 'react';
import PropTypes from 'prop-types'
import MapObject from '../MapObject';
import GoogleMap from '../GoogleMapProvider';
import PinType from '../PinTypes';

class PlaceMarker extends MapObject {
    DEFAULT_PIN_TYPE = PinType.PIN;

    createObject() {
        let position = this.getPosition();
        let type = this.DEFAULT_PIN_TYPE;
        if (this.props.type) {
            type = this.props.type;
        }
        let typeName = type.name.toLowerCase().replace('_', '-');
        this.object = GoogleMap.Custom.PlaceMarker(this.props.map, position, typeName, this.props.onClick);
    }

    render() {
        return (<span>Marker element</span>);
    }
}

PlaceMarker.propTypes = Object.assign({}, MapObject.propTypes, {
    type: PropTypes.instanceOf(PinType)
});
export default PlaceMarker;