import Map from "../modules/Map/Map";
import {displayPostContent} from "../actions"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        mapProperties: state.map
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        displayPostContent: post => dispatch(displayPostContent(post))
    }
};

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);

export default MapContainer;