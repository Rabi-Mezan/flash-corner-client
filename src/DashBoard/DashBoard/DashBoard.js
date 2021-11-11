import React from 'react';
import logo from '../../images/Group 1.png'
import './DashBoard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddProducts from './AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';

const DashBoard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className='bg-gray-600 h-24'>
                <Link to='/home'>
                    <img alt='' class="m-auto w-auto h-20 py-2" src={logo} />
                </Link>
            </div>
            <div className='dashboard'>
                <div class="relative bg-white dark:bg-gray-800">
                    <div class="flex flex-col sm:flex-row sm:justify-between">
                        <div class="lg:w-72 h-screen bg-blue-100">
                            <div class="flex items-center justify-start mx-6 mt-10">

                            </div>
                            <nav class="mt-10 lg:px-6 ">
                                <Link to={`${url}/addProduct`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " >

                                    <span class="lg:mx-4 lg:text-lg text-xs font-normal">
                                        Add A Product
                                    </span>
                                    <span class="flex-grow text-right">
                                    </span>
                                </Link>
                                <Link to={`${url}/manageProducts`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg  dark:bg-gray-600" >

                                    <span class="lg:mx-4 lg:text-lg text-xs font-normal">
                                        Manage Products
                                    </span>
                                    <span class="flex-grow text-right">
                                    </span>
                                </Link>
                                <Link to={`${url}/manageOrders`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ">

                                    <span class="lg:mx-4 lg:text-lg text-xs font-normal">
                                        Manage All Orders
                                    </span>

                                </Link>
                                <Link to={`${url}/makeAdmin`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " >

                                    <span class="lg:mx-4 lg:text-lg text-xs font-normal">
                                        Make Admin
                                    </span>
                                    <span class="flex-grow text-right">
                                    </span>
                                </Link>
                                < button class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors  dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " >

                                    <span class="lg:mx-4 lg:text-lg text-xs font-normal">
                                        Logout
                                    </span>
                                    <span class="flex-grow text-right">
                                    </span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>

                    </Switch>
                </div>

            </div>



        </div>
    );
};

export default DashBoard;