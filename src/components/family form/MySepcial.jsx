/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { AssetContext } from "./Gradnpa";

const MySepcial = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h4>WOW: </h4>
            <p>Dilam: {asset}</p>
            <p>Given by Grandpa: {gift}</p>
        </div>
    );
};

export default MySepcial;