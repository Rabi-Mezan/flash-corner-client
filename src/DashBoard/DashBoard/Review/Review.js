import React from 'react';
import { useForm } from "react-hook-form";


const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className='font-bebas-neue uppercase lg:text-4xl text-xl font-black flex my-8 flex-col leading-none dark:text-white text-gray-600 '>Give You Valuable Opinion About Our Products</h1>

            <div>
                <form className='lg:flex lg:flex-col m-auto lg:w-2/3 w-full  addproducts' onSubmit={handleSubmit(onSubmit)}>

                    <input style={{ height: "100px" }} placeholder='Write Your Opinion' {...register("review")} />
                    <input placeholder="Rate us out of 5" type="number" {...register("rating", { min: 0, max: 5 })} />
                    <input type="submit" />
                </form>

            </div>
        </div>
    );
};

export default Review;