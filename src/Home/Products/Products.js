import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-14'>
            <h1 class="font-bebas-neue uppercase text-4xl text-xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Recent Products
            </h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 '>
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