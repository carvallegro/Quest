import _ from 'lodash'
import Map from '../modules/Map/Map'
import {openPostContent} from '../actions'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        mapProperties: Object.assign({}, state.map, {
            post: _.find(state.posts, {'id': state.map.postId})
        }),
        textOverlays: state.textOverlays
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        displayPostContent: () => dispatch(openPostContent(true))
    }
};

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);

export default MapContainer;