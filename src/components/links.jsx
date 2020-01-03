import React from 'react';


const link = (name) => {
    return <div className="link">{name}</div>;
};

function Links (props) {
    return (
        <div id="links">
            {link("Today's Deals")}
            {link("Best Sellers")}
            {link("Find a Gift")}
            {link("Customer Service")}
            {link("New Releases")}
            {link("Registry")}
            {link("Gift Cards")}
            {link("Sell")}
            {link("AmazonBasics")}
            {link("Coupons")}
            {link("Whole Foods")}
            {link("Free Shipping")}
            {link("Shopper Toolkit")}
            {link("#FoundItOnAmazon")}
        </div>
    );
}

export default Links;