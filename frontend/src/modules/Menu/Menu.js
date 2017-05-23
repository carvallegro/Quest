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
                    <p>Places</p>
                    <ul className="menu-content">
                        {this.props.posts.map(post =>
                            <li key={post.id}
                                onClick={() => this.props.setMapPost(post)}
                                onDoubleClick={() => this.props.displayPostContent(post)}>
                                {post.id} - {post.title} - {post.isContentVisible ? 'true' : 'false'}
                            </li>
                        )}
                        <li onClick={() => this.props.setMapPost(null)}>
                            NULL
                        </li>
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