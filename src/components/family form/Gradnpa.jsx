// import React from 'react';
import './Grandpa.css';

import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import { createContext } from 'react';

export const AssetContext = createContext('gold'); 

const Gradnpa = () => {
    const asset='Ring';
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
        <AssetContext.Provider value='Gold'>
        <section className='flex'>
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>

        </AssetContext.Provider>
            
        </div>
    );
};

export default Gradnpa;