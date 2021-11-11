import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../Shared/Header/Header';


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { loginUser } = useAuth()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }


    const handleLogin = e => {
        loginUser(loginData.email, loginData.password)
        history.push('/')
        e.preventDefault()
    }

    return (
        <div>
            <Header></Header>

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            />
            <div class="bg-blue-200 flex">
                <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                    <h1 class="font-bold text-2xl my-10 text-white"> Login </h1>
                    <form onSubmit={handleLogin} class="mt-2 flex flex-col lg:w-1/2 w-8/12">
                        <div class="flex flex-wrap items-stretch w-full  relative h-15 bg-white  rounded mb-6 pr-10">
                            <div class="flex -mr-px justify-center w-15 p-4">
                                <span
                                    class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                >
                                    <i class="fas fa-at"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="email"
                                onBlur={handleOnBlur}
                                class="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="Email"
                            />
                        </div>
                        <div class="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded mb-4">
                            <div class="flex -mr-px justify-center w-15 p-4">
                                <span
                                    class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                                >
                                    <i class="fas fa-lock"></i>
                                </span
                                >
                            </div>
                            <input
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                class="flex-shrink flex-grow flex-auto leading-normal w-px  border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                                placeholder="Password"
                            />
                            <div class="flex -mr-px">
                                <span
                                    class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                                >

                                </span>
                            </div>
                        </div>
                        <Link to='/register' class="text-base text-white text-right font-roboto leading-normal hover:underline mb-6">New here? Create Account</Link>


                        <button class="bg-blue-400 w-full py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">
                            Login
                        </button>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;