import _ from 'lodash'
import {connect} from 'react-redux'
import {openPostContent, expandPostContent} from '../../actions/postContent'
import PostContent from "./PostContent";


const mapStateToProps = (state) => {
    return {
        open: state.postContent.open,
        expand: state.postContent.expand,
        post: _.find(state.posts, {'id': state.map.postId})
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openPostContent: open => dispatch(openPostContent(open)),
        expandPostContent: expand => dispatch(expandPostContent(expand))
    }
};

const postContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContent);

export default postContentContainer;