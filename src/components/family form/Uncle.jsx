// import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className=''>
            <h2>Uncle</h2>
            <section className='flex'>
            <Cousin name='X'></Cousin>
            <Cousin name='Y'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;