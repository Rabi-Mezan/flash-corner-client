
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, IsLoading } = useAuth()
    if (IsLoading) {
        return <div>
            <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossorigin="anonymous" />

            <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
                <span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{ top: "50%" }}
                >
                    <i class="fas fa-circle-notch fa-spin fa-5x"></i>
                </span>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;