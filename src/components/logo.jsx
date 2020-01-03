import React from 'react';
import logo from '../images/logo.svg';

function Logo (props) {
    return (
        <div id="logo">
            <span className="title">Gammazon</span>
            <br/>
            <img src={logo} className="icon" alt=""/>
            <div className="sub-title">Try Prime</div>
        </div>
    );
}

export default Logo;