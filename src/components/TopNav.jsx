import React, { Component } from 'react';

import SideNav from "./SideNav";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import NavTools from "./navTools";
// --------------------------------------------------------------------------------------------------

class TopNav extends Component {
    render () {
        return (
            <div id="top-nav">
                <div className="nav-left">
                    <SideNav/>
                    <Logo/>
                </div>

                <SearchBar/>
                <NavTools/>
                
            </div>
        );
    }
}


export default TopNav;