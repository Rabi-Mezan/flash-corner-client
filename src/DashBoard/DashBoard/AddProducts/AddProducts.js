import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Success from '../../../AlertCompo/Success/Success';
import './AddProducts.css'


const AddProducts = () => {
    const { register, reset, handleSubmit } = useForm();
    const [isAdded, setIsAdded] = useState(false)
    const onSubmit = data => {
        fetch('https://fierce-stream-68374.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setIsAdded(true)
                    reset();
                };
            })
    }
    return (
        <div className='lg:my-20 '>
            <h1 className='lg:text-3xl my-5 font-bold text-center'>Add New Products</h1>
            {
                isAdded && <Success></Success>
            }
            <form className='flex flex-col m-auto lg:w-2/3 w-1/2  addproducts' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='product name' {...register("name")} />
                <input className='' style={{ height: '80px' }} placeholder='description' {...register("description")} />
                <input placeholder='price' type="number" {...register("price")} />
                <input placeholder='image link'  {...register("img")} />
                <input className='cursor-pointer bg-blue-500 text-white' placeholder='' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;