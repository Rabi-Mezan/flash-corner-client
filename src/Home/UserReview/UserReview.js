import React from 'react';
import { useEffect, useState } from 'react';




const UserReview = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('https://fierce-stream-68374.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            <h1 class="font-bebas-neue uppercase lg:text-4xl text-xl font-black flex flex-col leading-none dark:text-white text-gray-800 my-5 ">
                What Our Customers Say !
            </h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 '>
                {
                    reviews.map(r =>
                        <div >
                            <div class=" bg-gray-100 lg:h-96 grid items-center justify-center">
                                <div class="p-3 h-40 my-3  bg-white flex items-center rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                                    <div className='flex flex-col justify-center items-center'>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <h1 class="lg:text-xl font-bold text-gray-700 mb-2">Mr. {r?.displayName}</h1>
                                        <p class="text-gray-600 w-80 text-sm">{r?.review?.review}</p>
                                        <p class="text-gray-600 w-80 text-sm"><i class="fas fa-star mr-1 text-yellow-400"></i>{r?.review?.rating}/5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UserReview;


