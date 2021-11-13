import React from 'react';
import opps from '../images/opps.gif'
import Header from '../Shared/Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='my-20' >
                <img className='m-auto' src={opps} alt="" />
            </div>
        </div>
    );
};

export default NotFound;