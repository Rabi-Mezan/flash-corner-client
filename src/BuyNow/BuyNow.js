import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Header from '../Shared/Header/Header';

const BuyNow = () => {
    const { register, reset, handleSubmit } = useForm();
    const { id } = useParams()
    const { user } = useAuth()
    const [product, setProduct] = useState({});


    const onSubmit = data => {

        console.log(data);
        reset()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
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
                    <img className='w-2/3 px-10 py-4 m-auto' src={product.img} alt="" />
                    <div className='px-10'>
                        <h1 className='flex justify-evenly lg:text-3xl font-bold my-2'>{product.name} <span>	৳{product.price}</span></h1>
                        <p className='w-2/3 m-auto'>{product.description}</p>
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <h1 className='lg:text-3xl mt-10  font-bold text-center'>Almost Ready To Buy..</h1>
                    <form className='lg:flex lg:flex-col m-auto lg:w-2/3 w-full  addproducts' onSubmit={handleSubmit(onSubmit)}>
                        <input value={user.displayName}  {...register("username")} />
                        <input value={user?.email} {...register("email")} />
                        <input placeholder='phone number' type="number" {...register("phone")} />
                        <input value={product?.name}  {...register("name")} />
                        <input value='Confirm' type="submit" />
                    </form>
                </div>


            </div>
            {/* <Footer></Footer> */}
        </div>

    );
};

export default BuyNow;