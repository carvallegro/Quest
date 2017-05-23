/**
 * Created by vcarmignac on 23/3/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import MapObject from '../MapObject'
import GoogleMap from '../GoogleMapProvider'

class TextOverlay extends MapObject {

    createObject() {
        let position = this.getPosition();
        this.object = GoogleMap.Custom.TextOverlay(this.props.map, position, this.props.text, this.props.textSize);
    }

    render() {
        return (
            <span>
                {this.props.text}
            </span>
        );
    }
}

TextOverlay.propTypes = Object.assign({}, MapObject.propTypes, {
    text: PropTypes.string.isRequired,
    textSize: PropTypes.number.isRequired
});

export default TextOverlay;