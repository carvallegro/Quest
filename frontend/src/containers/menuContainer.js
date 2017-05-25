import {connect} from 'react-redux'
import {toggleMenu, setMapPost, displayPostContent} from '../actions'
import Menu from '../modules/Menu/Menu'

const mapStateToProps = (state) => {
    return {
        isMenuOpen: state.menu,
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: isMenuOpen => dispatch(toggleMenu(isMenuOpen)),
        setMapPost: postId => dispatch(setMapPost(postId)),
        displayPostContent: postId => dispatch(displayPostContent(postId))
    }
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;
