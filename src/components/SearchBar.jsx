import React, { Component } from 'react';

import SearchDropDown from "./searchDropDown";
import magnifyingGlass from '../images/magnifyingGlass.svg'
// --------------------------------------------------------------------------------------------------

class SearchBar extends Component {
    render () {
        return (
            <div id="search-bar">
                <SearchDropDown/>
                <input id="input" type="text"/>
                <img src={magnifyingGlass} className="icon" alt=""/>
            </div>
        );
    }
}

export default SearchBar;

