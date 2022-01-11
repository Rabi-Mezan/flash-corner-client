import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fierce-stream-68374.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className=' my-20'>
                <h1 className='font-bebas-neue uppercase lg:text-4xl text-md font-black flex my-8 flex-col leading-none dark:text-white text-gray-600 '>Find All Our Products Here</h1>

                <div class="lg:w-80 w-60 m-auto h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
                    <input type="search" name="search" id="search" placeholder="Search products"
                        class="appearance-none w-full outline-none focus:outline-none active:outline-none" />
                    <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" class="w-6 h-6">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 my-5 mx-10 '>
                {
                    products.map(product =>

                        <Product
                            key={product._Id}
                            product={product}
                        >

                        </Product>)
                }
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Shop;