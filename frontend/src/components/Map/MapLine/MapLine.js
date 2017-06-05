import React from 'react';
import MapObject from '../GenericMapObject';
import GoogleMap from '../GoogleMapProvider';

class MapLine extends MapObject {

    getToPosition() {
        return GoogleMap.Native.LatLng(this.props.toPos.lat, this.props.toPos.lng);
    }

    createObject() {
        let from = this.getPosition();
        let to = this.getToPosition();
        this.object = GoogleMap.Custom.MapLine(this.props.map, from, to);
        window.setTimeout(() => {
            this.object.drawLine(30);
        }, 2000);
    }

    render() {
        return (<span>MapLine</span>);
    }
}


export default MapLine;