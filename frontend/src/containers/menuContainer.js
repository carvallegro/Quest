import {connect} from 'react-redux'
import {toggleMenu, openMenu, setMapPost, openPostContent} from '../actions'
import Menu from '../modules/Menu/Menu'

const mapStateToProps = (state) => {
    return {
        isMenuOpen: state.menu.open,
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => dispatch(toggleMenu()),
        openMenu: open => dispatch(openMenu(open)),
        setMapPost: postId => dispatch(setMapPost(postId)),
        displayPostContent: () => dispatch(openPostContent(true))
    }
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;
