import React from 'react';

const Banner = () => {
    return (
        <div>

            <main class="dark:bg-gray-800 bg-white relative overflow-hidden ">

                <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div class="container mx-auto px-6 flex relative py-16">
                        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Buy A
                                <span class="text-5xl sm:text-7xl">
                                    Dream
                                </span>
                            </h1>
                            <p class="text-sm sm:text-base text-gray-700 dark:text-white my-4">
                                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                            </p>
                            <div class="flex  m-auto">
                                <a href="/" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-500">
                                    Shop Now
                                </a>
                                <a href="/" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2  text-pink-500 dark:text-white hover:bg-blue-500 hover:text-white text-md">

                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative ml-20">
                            <img className='lg:w-2/3' src="https://purepng.com/public/uploads/large/nikon-camera-ato.png" alt='' />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Banner;