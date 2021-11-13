import React from 'react';
import img from '../../../images/Under construction-cuate.png'

const MakePayment = () => {

    return (
        <div className='my-10' >
            <h1 className='font-bebas-neue uppercase  lg:text-3xl font-black  leading-none dark:text-white text-gray-800' >This Feature Is Under Construction!</h1>
            <img className='lg:w-2/3 m-auto' src={img} alt="" />
        </div>
    );
};

export default MakePayment;