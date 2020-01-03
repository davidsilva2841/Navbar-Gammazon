import React, { Component } from 'react';
import sideNavButton from '../images/sideNavButton.svg';

class SideNav extends Component {
    render () {
        return (
            <img src={sideNavButton} alt="" id="side-nav-button"/>
        );
    }
}


export default SideNav;