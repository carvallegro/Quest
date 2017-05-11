/**
 * Created by vcarmignac on 27/3/17.
 */
import React, {Component} from 'react';
import map1 from './svg/map-1.svg'
import menu from './svg/menu.svg'
import notebook2 from './svg/notebook-2.svg'
import pin from './svg/pin.svg'
import placeholder from './svg/placeholder.svg'

var iconArray = {
    'map:1': map1,
    'menu': menu,
    'notebook:2': notebook2,
    'pin': pin,
    'placeholder': placeholder
};

class SvgIcon extends Component {
    // Todo : finish this, at some point
    render() {
        return (<img src={iconArray[this.props.icon]} className="SvgIcon" alt="my logo"/>)
    }
}

SvgIcon.propTypes = {
    icon: React.PropTypes.string.isRequired
};

export default SvgIcon;