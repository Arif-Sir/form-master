/* eslint-disable react/prop-types */
// import React from 'react';
import MYself from './MYself';
import Sis from './Sis';
import Bro from './Bro';

const Dad = ({asset}) => {
    return (
        <div className=''>

            <h2>Dad</h2>
           <section className='flex'>
           
            <MYself asset={asset}></MYself>
            <Bro></Bro>
            <Sis></Sis>
        
           </section>
           </div>
    );
};

export default Dad;