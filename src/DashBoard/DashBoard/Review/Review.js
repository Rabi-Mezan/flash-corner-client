import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const Review = () => {

    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = user.email
        fetch('https://fierce-stream-68374.herokuapp.com/users/review', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div>
            <h1 className='font-bebas-neue uppercase lg:text-4xl text-xl font-black flex my-8 flex-col leading-none dark:text-white text-gray-600 '>Leave Us A Feedback</h1>

            <div>
                <form className='lg:flex lg:flex-col m-auto lg:w-2/3 w-full  addproducts' onSubmit={handleSubmit(onSubmit)}>

                    <input style={{ height: "100px" }} placeholder='Write Your Opinion' {...register("review")} />
                    <input placeholder="Rate us out of 5" type="number" {...register("rating", { min: 0, max: 5 })} />
                    <input className='cursor-pointer bg-blue-500 text-white' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default Review;