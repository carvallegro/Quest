/**
 * Created by vcarmignac on 26/3/17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Menu extends Component {
    render() {
        let menuOuterClasses = 'menu-outter ' + (this.props.isMenuOpen ? 'open' : '');
        return (
            <div className={menuOuterClasses}>
                <div className="menu-header">
                    <ul className="menu-header-actions">
                        <li className="first"><a className="menu-trigger" onClick={this.props.toggleMenu} href="#!">
                            <i className="fi flaticon-calendar"></i>
                        </a></li>
                        <li className="second"><a className="menu-trigger" onClick={this.props.toggleMenu} href="#!">
                            <i className="fi flaticon-map-location"></i>
                        </a></li>
                        <li className="third"><a className="menu-trigger" onClick={this.props.toggleMenu} href="#!">
                            <i className="fi flaticon-idea"></i>
                        </a></li>
                    </ul>
                </div>
                <div className="menu-inner">
                    <ul className="menu-content">
                        {this.props.posts.map(post =>
                            <li key={post.id}>
                                <a onMouseOver={() => this.props.setMapPost(post.id)}
                                   onDoubleClick={() => this.props.displayPostContent(post.id)}>
                                    {post.id} - {post.title} - {post.isContentVisible ? 'true' : 'false'}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

}

Menu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    setMapPost: PropTypes.func.isRequired,
    displayPostContent: PropTypes.func.isRequired,
};


export default Menu;