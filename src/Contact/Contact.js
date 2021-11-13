import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <section id="contact" class="relative w-full min-h-screen bg-gray-700 text-red-500">
                <div class="lg:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 h-32 w-full"></div>


                <div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">


                    <div class="w-full md:w-1/2 p-5 md:px-0 mx-5">
                        <div class="bg-gray-900 border border-red-500 w-full lg:w-1/2 h-full p-5 pt-8">
                            <h3 class="text-2xl font-semibold mb-5">
                                Follow Us On
                            </h3>

                            <div class="flex flex-col gap-3">

                                <Link to="/" class="flex items-center  hover:text-white hover:bg-red-500 p-2">
                                    <i class="fab fa-instagram text-2xl m-2"></i>
                                    Instagram
                                </Link>
                                <Link to="/" class="flex items-center hover:text-white hover:bg-red-500 p-2">
                                    <svg fill="currentColor" class="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                    Youtube
                                </Link>
                                <Link to="/" class="flex items-center hover:text-white hover:bg-red-500 p-2">
                                    <svg fill="currentColor" class="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                        <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z" />
                                    </svg>
                                    Facebook
                                </Link>
                                <Link to="/" class="flex items-center hover:text-white hover:bg-red-500 p-2">
                                    <i class="fab fa-twitter text-2xl m-2"></i>
                                    Twitter
                                </Link>
                            </div>
                        </div>
                    </div>


                    <form action="#" class="w-full md:w-1/2 border border-red-500 p-6 bg-gray-900">
                        <h2 class="text-2xl pb-3 font-semibold">
                            Send Message
                        </h2>
                        <div>
                            <div class="flex flex-col mb-3">
                                <label for="name">Name</label>
                                <input
                                    type="text" id="name"
                                    class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                                    autocomplete="off"
                                />
                            </div>
                            <div class="flex flex-col mb-3">
                                <label for="email">Email</label>
                                <input
                                    type="text" id="email"
                                    class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                                    autocomplete="off"
                                />
                            </div>
                            <div class="flex flex-col mb-3">
                                <label for="message">Message</label>
                                <textarea
                                    rows="4" id="message"
                                    class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                                ></textarea>
                            </div>
                        </div>
                        <div class="w-full pt-3">
                            <button type="submit" class="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Contact;