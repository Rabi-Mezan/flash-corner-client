import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, description, price, img } = product
    return (

        <div class="lg:flex items-center justify-items-start p-10 w-full h-full bg-white">
            <div class="border-t border-b pt-16 grid lg:grid-cols-2 gap-8">
                <div class="flex flex-col justify-start">
                    <div class="flex flex-col w-full  lg:h-4/6 justify-items-start  rounded-lg overflow-hidden"
                        style={{ minHeigth: "320px" }}>
                        <img class="lg:w-60 h-full " src={img} alt=' dslr camera' />
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col text-left lg:gap-4">
                        <h1 class="capitalize text-3xl font-bold">{name}</h1>
                        <h2 class="text-3xl">{price} BDT</h2>
                        <p class="text-lg text-gray-500	">{description}</p>
                        <div class="flex items-center gap-4 my-6 cursor-pointer ">
                            <Link to='/buynow'>
                                <button class="bg-pink-500 hover:bg-blue-600 px-5 py-3 text-white rounded-lg w-full text-center">Buy Now</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;