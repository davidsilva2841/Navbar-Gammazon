import React from 'react';

import globe from '../images/globe.svg';

function LangDropDown (props) {
    return (
        <div id="lang-drop-down">
            <div>EN</div>
            <div><img src={globe} className="icon" alt=""/></div>
        </div>
    );
}

export default LangDropDown;