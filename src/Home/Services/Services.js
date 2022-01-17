import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    return (
        <div className=' services my-40 ' >
            <div className='lg:ml-20'>
                <h1 className='font-bebas-neue uppercase lg:text-5xl text-xl font-black flex flex-col leading-none dark:text-white text-gray-900 lg:text-left text-center'>Our Qualities</h1>
                <p className='text-sm my-6  lg:text-left text-center '>Scan photos with the same ease that you scan documents using an automatic feeder to quickly tackle large stacks of photos. Save your images and share them with family and friends.</p>
                <Link to="/home" class="uppercase  py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md ml-0 text-center lg:flex justify-start w-1/2 hover:bg-blue-500">

                    See All Services
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center my-10'>
                <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                    <div className='flex justify-center items-center rounded-lg lg:w-96 w-80 shadow-md hover:scale-105 transition transform duration-500'>
                        <div><i class="fas fa-truck text-5xl p-4 text-indigo-600"></i></div>
                        <div className='text-left'>
                            <h1 className='lg:text-2xl font-semibold'>Free home delivery</h1>
                            <p className='lg:text-md text-xs lg:w-2/3'>Provide free home delivery  for the all product over $100</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center rounded-lg shadow-md lg:w-96 w-80 hover:scale-105 transition transform duration-500'>
                        <div><i class="far fa-check-square text-5xl p-4 text-indigo-600"></i></div>
                        <div className='text-left'>
                            <h1 className='lg:text-2xl font-semibold'>Quality Products</h1>
                            <p className='lg:text-md text-xs lg:w-2/3'>We ensure the product quality that is our main goal</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center rounded-lg shadow-md lg:w-96 w-80 hover:scale-105 transition transform duration-500'>
                        <div><i class="fas fa-exchange-alt text-5xl p-4 text-indigo-600"></i></div>
                        <div className='text-left'>
                            <h1 className='lg:text-2xl font-semibold'>3 Days Return</h1>
                            <p className='lg:text-md text-xs lg:w-2/3'>Our Return Policy is easy and very simple and for all you</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center rounded-lg shadow-md lg:w-96 w-80 hover:scale-105 transition transform duration-500'>
                        <div><i class="fas fa-headset text-5xl p-4 text-indigo-600"></i></div>
                        <div className='text-left'>
                            <h1 className='lg:text-2xl font-semibold'>Online Support</h1>
                            <p className='lg:text-md text-xs lg:w-2/3'>Provide 24/7 online support for any information need</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;