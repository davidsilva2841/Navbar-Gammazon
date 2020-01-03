import React, { Component } from 'react';

import SelectAddress from "./selectAddress";
import Links from "./links";

class BottomNav extends Component {
    render () {
        return (
            <div id="bottom-nav">
                <SelectAddress/>
                <Links/>
            </div>
        );
    }
}


export default BottomNav;