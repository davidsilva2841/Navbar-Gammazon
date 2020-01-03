import React from 'react';

import LangDropDown from "./langDropDown";
import SignIn from "./signIn";
import TryPrime from "./tryPrime";
import Cart from './cart';

function NavTools (props) {
    return (
        <div id="nav-tools">
            <LangDropDown/>
            <SignIn/>
            <div id="orders">Orders</div>
            <TryPrime />
            <Cart/>
        </div>
    );
}

export default NavTools;