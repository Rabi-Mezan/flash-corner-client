import React from 'react';

const Services = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                <div className='flex justify-center items-center'>
                    <div><i class="fas fa-truck text-5xl p-4"></i></div>
                    <div className='text-left'>
                        <h1 className='text-3xl font-semibold'>Free home delivery</h1>
                        <p className='text-md w-2/3'>Provide free home delivery  for the all product over $100</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div><i class="far fa-check-square text-5xl p-4"></i></div>
                    <div className='text-left'>
                        <h1 className='text-3xl font-semibold'>Quality Products</h1>
                        <p className='text-md w-2/3'>We ensure the product quality that is our main goal</p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div><i class="fas fa-exchange-alt text-5xl p-4"></i></div>
                    <div className='text-left'>
                        <h1 className='text-3xl font-semibold'>3 Days Return</h1>
                        <p className='text-md w-2/3'>Our Return Policy is easy and very simple and for all you</p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div><i class="fas fa-headset text-5xl p-4"></i></div>
                    <div className='text-left'>
                        <h1 className='text-3xl font-semibold'>Online Support</h1>
                        <p className='text-md w-2/3'>Provide 24/7 online support for any information need</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;