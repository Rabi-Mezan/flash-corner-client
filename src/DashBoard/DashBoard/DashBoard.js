import React from 'react';
import logo from '../../images/Group 1.png'
import './DashBoard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import AddProducts from './AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import MyOrders from './MyOrders/MyOrders';
import MakePayment from './MakePayment/MakePayment';
import Review from './Review/Review';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    const history = useHistory()

    const handleLogout = () => {
        logOut()
        history.push('/home')
    }
    return (
        <div>
            <div className='bg-gray-600 h-24'>
                <Link to='/home'>
                    <img alt='' class="m-auto w-auto h-20 py-2" src={logo} />
                </Link>
            </div>
            <div className='dashboard'>
                <div class="relative bg-white dark:bg-gray-800">
                    <div class="grid flex-col sm:flex-row sm:justify-between ">
                        <div class="lg:w-72 h-screen bg-blue-300 shadow">
                            <div class="flex items-center justify-start mx-6 mt-10  ">

                            </div>
                            <nav class="mt-10 lg:px-6 t">
                                <Link to='/home' class="hover:text-gray-800 hover:bg-gray-100   flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-500  text-gray-600 dark:text-gray-400 rounded-lg " >

                                    <span class="lg:mx-4 lg:text-lg text-xs  font-semibold">
                                        Home
                                    </span>
                                    <span class="flex-grow text-right">
                                    </span>
                                </Link>
                                {
                                    admin ? <div>
                                        <Link to={`${url}/addProduct`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " >

                                            <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
                                                Add  Products
                                            </span>
                                            <span class="flex-grow text-right">
                                            </span>
                                        </Link>
                                        <Link to={`${url}/manageProducts`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg  dark:bg-gray-600" >

                                            <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
                                                Manage All Products
                                            </span>
                                            <span class="flex-grow text-right">
                                            </span>
                                        </Link>
                                        <Link to={`${url}/manageOrders`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ">

                                            <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
                                                Manage All Orders
                                            </span>

                                        </Link>
                                        <Link to={`${url}/makeAdmin`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " >

                                            <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
                                                Make Admin
                                            </span>
                                            <span class="flex-grow text-right">
                                            </span>
                                        </Link>
                                    </div>
                                        :
                                        <div>
                                            <Link to={`${url}/myOrders`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " >

                                                <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
                                                    My Orders
                                                </span>
                                                <span class="flex-grow text-right">
                                                </span>
                                            </Link>
                                            <Link to={`${url}/makePayment`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg  dark:bg-gray-600" >

                                                <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
                                                    Make Payment
                                                </span>
                                                <span class="flex-grow text-right">
                                                </span>
                                            </Link>
                                            <Link to={`${url}/review`} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ">

                                                <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
                                                    Review
                                                </span>

                                            </Link>

                                        </div>
                                }
                                < button onClick={handleLogout} class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg w-full" >

                                    <span class="lg:mx-4 lg:text-lg text-xs font-semibold">
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
                            {
                                admin ? <ManageProducts></ManageProducts>
                                    :
                                    <MyOrders></MyOrders>
                            }
                        </Route>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/makePayment`}>
                            <MakePayment></MakePayment>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>

                    </Switch>
                </div>

            </div>



        </div>
    );
};

export default DashBoard;