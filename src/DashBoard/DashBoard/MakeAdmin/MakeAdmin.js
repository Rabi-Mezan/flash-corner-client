import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Success from '../../../AlertCompo/Success/Success';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, reset, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        setEmail(data.email)
        const user = { email };
        fetch('https://fierce-stream-68374.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    reset()
                }
                else {
                    setSuccess(false)
                }
            })
    }
    return (
        <div>
            <div className='lg:my-20'>
                <h1 className='lg:text-3xl my-5 font-bold text-center'>Make An Admin</h1>
                {
                    success && <Success></Success>
                }
                <form className='lg:flex lg:flex-col m-auto lg:w-2/3 w-full  addproducts' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='email' {...register("email")} />
                    <input className='cursor-pointer bg-blue-500 text-white' placeholder='' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;