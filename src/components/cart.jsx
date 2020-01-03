import React from 'react';

import cart1 from '../images/cart.svg';

function Cart (props) {
    return (
        <div id="cart">
            <div id="count">0</div>
            <img src={cart1} className="icon" alt=""/>
            <div className="title">Cart</div>
        </div>
    );
}

export default Cart;