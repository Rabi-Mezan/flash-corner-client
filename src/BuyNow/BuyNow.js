import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Success from '../AlertCompo/Success/Success';
import useAuth from '../hooks/useAuth';
import Header from '../Shared/Header/Header';

const BuyNow = () => {
    const { register, reset, handleSubmit } = useForm();
    const { id } = useParams()
    const { user } = useAuth()
    const [product, setProduct] = useState({});
    const history = useHistory()
    const [success, setSuccess] = useState(false)


    const onSubmit = data => {
        data.product = product
        data.status = "pending"
        fetch('https://fierce-stream-68374.herokuapp.com/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccess(true)
                    alert('order placed Successfully')
                    reset();
                    history.push('/dashboard')
                }
                else {
                    setSuccess(false)
                }
            })
    }

    useEffect(() => {
        fetch(`https://fierce-stream-68374.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])





    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                {/* products details */}
                <div className='flex flex-col justify-items-start'>
                    <img className='w-2/3 px-10 py-4 m-auto' src={product?.img} alt="" />
                    <div className='px-10'>
                        <h1 className='flex justify-evenly lg:text-3xl font-bold my-2'>{product?.name} <span>	৳{product?.price}</span></h1>
                        <p className='w-2/3 m-auto'>{product?.description}</p>
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <h1 className='lg:text-3xl mt-10  font-bold text-center'>Almost Ready To Buy..</h1>
                    {success && <Success></Success>}
                    <form className='lg:flex lg:flex-col m-auto lg:w-2/3 w-full  addproducts' onSubmit={handleSubmit(onSubmit)}>
                        <input value={user.displayName} placeholder='User name' {...register("username")} />
                        <input value={user.email} placeholder='email' {...register("email")} />
                        <input placeholder='phone' type="number" {...register("phone")} />
                        <input placeholder='address' type="text" {...register("address")} />
                        <input defaultValue={product?.name} placeholder=' product name' {...register("name")} />
                        <input className='cursor-pointer bg-blue-500 text-white' value='Proceed' type="submit" />
                    </form>
                </div>


            </div>
            {/* <Footer></Footer> */}
        </div>

    );
};

export default BuyNow;