/**
 * Created by vcarmignac on 26/3/17.
 */
import React, {Component, PropTypes} from 'react';

class Menu extends Component {
    render() {
        let menuOuterClasses = 'menu-outter ' + (this.props.isMenuOpen ? 'open' : '');
        return (
            <div className={menuOuterClasses}>
                <a className="menu-trigger" onClick={this.props.toggleMenu} href="#!">
                    <i className="fi flaticon-menu"></i>
                </a>
                <div className="menu-inner">
                    <ul className="menu-content">
                        <li><a onClick={this.props.toggleMenu}><i className="fi flaticon-error"></i> Close</a></li>
                        <li>menu : {this.props.isMenuOpen ? 'true' : 'false'}</li>
                        <li>Length : {this.props.posts.length}</li>
                    </ul>
                    <p>Places</p>
                    <ul className="menu-content">
                        {this.props.posts.map(post => {
                            return <li>{post.id} - {post.title}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}

Menu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
};


export default Menu;