import React, { Component } from 'react';

import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
// --------------------------------------------------------------------------------------------------

class App extends Component {
    render () {
        return (
            <div className="container">
                <TopNav/>
                <BottomNav/>
            </div>
        );
    }
}


export default App;
