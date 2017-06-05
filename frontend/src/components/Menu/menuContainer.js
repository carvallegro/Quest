import {connect} from 'react-redux'
import {openPostContent} from '../../actions/postContent'
import {toggleMenu, openMenu, setMapPost} from '../../actions/menu'
import Menu from './Menu'

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
