import React, {Component} from 'react';
import MenuContainer from '../containers/menuContainer';
import MapContainer from './MapContainer/MapContainer';
import scriptLoader from 'react-async-script-loader'

/*global google*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMapsLoaded: false
        };
    }

    componentWillReceiveProps({isScriptLoaded, isScriptLoadSucceed}) {
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed) {
                this.setState({
                    isMapsLoaded: true
                });

            }
            else this.props.onError();
        }
    }

    render() {

        if (!this.state.isMapsLoaded) {
            return (<h1>Please Wait...</h1>);
        }

        return (
            <div className="app-content">
                <MenuContainer/>
                <MapContainer mapLoaded={this.state.isMapsLoaded}>
                </MapContainer>
            </div>
        );
    }
}

export default scriptLoader([
    'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAP_API_KEY + '&libraries=drawing'
])(App);
