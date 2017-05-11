import {connect} from 'react-redux'
import {toggleMenu} from '../actions'
import Menu from '../modules/Menu/Menu'

const mapStateToProps = (state) => {
    console.log('maoptateToProps');
    console.log(state);

    return {
        isMenuOpen: state.menu,
        posts: state.posts // TODO : remove. Just for test
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: (isMenuOpen) => {
            dispatch(toggleMenu(isMenuOpen))
        }
    }
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;
