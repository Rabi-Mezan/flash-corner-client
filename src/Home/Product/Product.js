import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, price, img } = product
    return (

        <div className='mt-8'>
            <div class="p-8" >
                <div class="lg:flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden" style={{ minHeight: '220px' }}>
                    <div class="lg:w-1/3 p-2 bg-cover">
                        <img src={img} alt="" />
                    </div>
                    <div class="lg:w-2/3 p-4">
                        <h1 class="text-gray-900 font-bold text-2xl">{name}</h1>
                        <p class="mt-2 text-gray-600 text-sm">{description}</p>
                        <div class="flex item-center mt-2">
                            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div>
                        <div class="flex item-center justify-between mt-3">
                            <h1 class="text-gray-700 font-bold text-xl">৳{price}</h1>
                            <Link to={`/buyNow/${_id}`}>
                                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Product;