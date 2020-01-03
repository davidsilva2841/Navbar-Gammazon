import React from 'react';

import location from '../images/location.svg';

function SelectAddress (props) {
    return (
        <div id="select-address">
            <div><img src={location} className="icon" alt=""/></div>
            <div className="title">Hello</div>
            <div className="sub-title">Select your address</div>
        </div>
    );
}

export default SelectAddress;