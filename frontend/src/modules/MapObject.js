import React, {Component} from 'react';
import PropTypes from 'prop-types'
import GoogleMap from './GoogleMapProvider'


class MapObject extends Component {
    constructor(props) {
        super(props);
        this.object = null;
    }

    getPosition() {
        return GoogleMap.Native.LatLng(this.props.pos.lat, this.props.pos.lng);
    }

    componentDidMount() {
        this.createObject();
    }

    componentWillUnmount() {
        if (this.object) {
            this.object.setMap(null);
        }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.map !== prevProps.map) ||
            (this.props.position !== prevProps.position)) {
            if (this.object) {
                this.object.setMap(null);
            }
            this.createObject();
        }
    }

    createObject() {
        throw new Error('You have to override the abstract method MapObject.createObject() !');
    }

    render() {
        return (<i> Default implementation of MapObject.render() </i>);
    }
}

MapObject.propTypes = {
    map: PropTypes.object,
    pos: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }),
    onClick: PropTypes.func
};

export default MapObject;