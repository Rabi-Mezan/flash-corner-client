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
            <h1 class="font-bebas-neue uppercase lg:text-4xl text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Recent Products
            </h1>
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