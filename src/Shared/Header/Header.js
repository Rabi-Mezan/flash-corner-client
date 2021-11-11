import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Group 1.png'

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>


            <div>
                <nav class="bg-gray-700 dark:bg-gray-800  shadow py-4 ">
                    <div class="max-w-7xl mx-auto px-8">
                        <div class="flex items-center justify-between h-16">
                            <div class=" flex items-center">
                                <Link class="flex-shrink-0" to='/home'>
                                    <img class="lg: w-1/3" src={logo} alt="Workflow" />
                                </Link>
                                <div class="hidden md:block">
                                    <div class="ml-10 flex items-baseline space-x-4">
                                        <Link class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to='/home'>
                                            Home
                                        </Link>
                                        <Link class="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to='/shopNow'>
                                            Shop Now
                                        </Link>

                                        <Link class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to='/contact'>
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="block">
                                <div class="ml-4 flex items-center md:ml-6">
                                    <div class="ml-3 relative">
                                        <div class="relative inline-block text-left">
                                            <div>
                                                {
                                                    user.email ? <Link to='/login'>
                                                        <button onClick={logOut} type="button" class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium
                                               bg-white hover:bg-gray-300 " id="options-menu">
                                                            Logout
                                                        </button>
                                                    </Link> :
                                                        <Link to='/login'>
                                                            <button type="button" class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium
                                            bg-white hover:bg-gray-300 " id="options-menu">
                                                                Login
                                                            </button>
                                                        </Link>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="-mr-2 flex md:hidden">

                            </div>
                        </div>
                    </div>
                    <div class="md:hidden">
                        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/home'>
                                Home
                            </Link>
                            <Link class="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium" to='/shopNow'>
                                Shop Now
                            </Link>

                            <Link class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/contact'>
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

        </div >
    );
};

export default Header;