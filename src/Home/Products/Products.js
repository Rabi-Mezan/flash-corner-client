import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fierce-stream-68374.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-14'>
            <div className='bg-red-400 invisible lg:visible w-40 h-10 grid place-content-center'></div>
            <h1 class="font-bebas-neue uppercase lg:text-5xl text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Recent Products
            </h1>
            <p className='text-sm lg:w-1/2 mx-auto my-4'>Our photographer matching service, Image Connect, makes it easy to find the right photographer to capture every special moment. Book, communicate, and receive your images all on one easy-to-use platform.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 mx-10 '>
                {
                    products.slice(0, 6).map(product =>

                        <Product
                            key={product._Id}
                            product={product}
                        >

                        </Product>)
                }
            </div>
        </div>
    );
};

export default Products;