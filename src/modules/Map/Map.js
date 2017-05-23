/**
 * Created by vcarmignac on 21/3/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import googleMapStyle from './google-map-custom-style.json';
import GoogleMap from '../GoogleMapProvider'
import TextOverlay from '../TextOverlay/TextOverlay'
import MapLine from '../MapLine/MapLine'
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
            // center: {lat: -24.350646, lng: 133.836676},
            zoom: 3,
            minZoom: 3,
            // disableDefaultUI: true,
            // disableDoubleClickZoom: true,
            // draggable: false,
            // fullscreenControl: false,
            // gestureHandling: 'none',
            // keyboardShortcuts: false,
            // mapTypeControl: false,
            // panControl: false,
            // rotateControl: false,
            // scaleControl: false,
            // scrollwheel: false,
            // zoomControl: false,
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

    render() {
        return (
            <div className="mapContainer">
                <div ref="map" className="map"></div>
                <TextOverlay pos={{lat: 64.642520, lng: 87.092891}} text="Russie" textSize={10} map={this.state.map}/>
                <TextOverlay pos={{lat: -23, lng: 133.919558}} text="Australie" textSize={5} map={this.state.map}/>
                <TextOverlay pos={{lat: 48.859529, lng: 2.343104}} text="Paris" textSize={1} map={this.state.map}/>
                { this.renderChildren() }
                <PlaceMarker pos={{lat: 64.642520, lng: 87.092891}} map={this.state.map} type={PinTypes.PLACEHOLDERS}/>

                {/*Paris Londres*/}
                <MapLine pos={{lat: 48.859529, lng: 2.343104}} toPos={{lat: 51.508172, lng: -0.126679}}
                         map={this.state.map}/>
                {/*Londres Honk Kong*/}
                <MapLine pos={{lat: 51.508172, lng: -0.126679}} toPos={{lat: 22.269321, lng: 114.158083}}
                         map={this.state.map}/>
                {/*Honk Kong Melbourne*/}
                <MapLine pos={{lat: 22.269321, lng: 114.158083}} toPos={{lat: -37.816977, lng: 144.965170}}
                         map={this.state.map}/>
            </div>
        )
    }
}

export default Map;