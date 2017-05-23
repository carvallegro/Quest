/**
 * Created by vcarmignac on 21/3/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import googleMapStyle from './google-map-custom-style.json';
import GoogleMap from '../GoogleMapProvider'
import TextOverlay from '../TextOverlay/TextOverlay'
import PlaceMarker from '../PlaceMarker/PlaceMarker'

/*global google*/
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null
        };
    }

    componentDidMount() {
        this.initMap();
    }

    initMap() {
        const map = GoogleMap.Native.Map(this.refs.map, {
            center: {lat: 61.769256, lng: 92.111992},
            zoom: 3,
            minZoom: 3,
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            draggable: false,
            fullscreenControl: false,
            gestureHandling: 'none',
            keyboardShortcuts: false,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            scrollwheel: false,
            zoomControl: false,
            backgroundColor: '#0D252E',
            styles: googleMapStyle
        });

        this.setState({
            map: map
        });
    }

    renderChildren() {
        const {children} = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.state.map,
            });
        })
    }

    postToDisplay() {
        if (!this.props.mapProperties.post) {
            return null;
        }

        let post = this.props.mapProperties.post;

        // TODO change the center feature
        this.state.map.panTo(post.place.position);
        return <PlaceMarker map={this.state.map}
                            pos={post.place.position}
                            type={post.place.pinType}
                            onClick={() =>
                                this.props.displayPostContent(post)
                            }/>;
    }

    render() {
        return (
            <div className="mapContainer">
                <div ref="map" className="map"></div>
                {this.props.textOverlays.map(to =>
                    <TextOverlay key={to.id} pos={to.position} text={to.text} textSize={to.textSize}
                                 map={this.state.map}/>
                )}
                { this.postToDisplay() }
                { this.renderChildren() }

                {/*/!*Londres Honk Kong*!/*/}
                {/*<MapLine pos={{lat: 51.508172, lng: -0.126679}} toPos={{lat: 22.269321, lng: 114.158083}}*/}
                {/*map={this.state.map}/>*/}
            </div>
        )
    }
}

Map.propTypes = {
    mapProperties: PropTypes.object.isRequired,
    textOverlays: PropTypes.array.isRequired,
    displayPostContent: PropTypes.func.isRequired
};

export default Map;