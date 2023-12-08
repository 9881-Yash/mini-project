import React from "react";
import Slider from "../components/Slider/Slider";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollections from "../components/NewCollections/NewCollections";
import Newsletter from "../components/Newsletter/Newsletter";

const Shop = () => {
    return(
        <div>
            <Slider/>
            <Popular/>
            <Offers/>
            <Newcollections/>
            <Newsletter/>
        </div>

    )
}

export default Shop;