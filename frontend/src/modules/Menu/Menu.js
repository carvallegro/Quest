/**
 * Created by vcarmignac on 26/3/17.
 */
import dateFns from 'date-fns'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'


class Menu extends Component {
    handleClickOutside = evt => {
        this.props.openMenu(false);
    };

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
                                <a onClick={() => this.props.setMapPost(post.id)}
                                   onDoubleClick={this.props.displayPostContent}>
                                    {dateFns.format(post.date, 'DD/MM/YYYY')} - {post.title}
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
    openMenu: PropTypes.func.isRequired,
    setMapPost: PropTypes.func.isRequired,
    displayPostContent: PropTypes.func.isRequired,
};


export default onClickOutside(Menu);