import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [order, setOrder] = useState([])
    const [control, setControl] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://fierce-stream-68374.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(result =>
                setOrder(result))
    }, [control, order])


    const handleCancle = id => {
        const procedd = window.confirm('Are you sure to cancel the order??')
        if (procedd) {
            fetch(`https://fierce-stream-68374.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('Deleted Successfully')
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })

        }
    }

    return (
        <div className='m-10'>
            {order.length === 0 ? <div className='my-20' >
                <h1 className='font-bebas-neue uppercase  lg:text-8xl font-black  leading-none dark:text-white text-gray-800' >You have no order!!</h1>
            </div>
                :
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    {
                        order.map(pd => <div className=''>
                            <div class="p-3" >
                                <div class="lg:flex  bg-white shadow-lg rounded-lg  overflow-hidden" style={{ minHeight: '200px' }}>
                                    <div class="lg:w-1/3 p-3 bg-cover">
                                        <img src={pd.product.img} alt="" />
                                    </div>
                                    <div class="lg:w-2/3 p-4">
                                        <h1 class="text-gray-900 font-bold text-2xl">{pd.product.name}</h1>
                                        <p class="mt-2 text-gray-600 text-sm">{pd.product.description.slice(0, 50)}...
                                            <span className={pd.status === "shipped" ? 'ml-5 text-xs text-green-500' : 'ml-5 text-xs text-yellow-400'}>
                                                {pd.status}
                                            </span>
                                        </p>

                                        <div class="flex items-center justify-around mt-5 ">
                                            <h1 class="text-gray-700 font-bold lg:text-xl">৳{pd.product.price}</h1>

                                            <button onClick={() => handleCancle(pd._id)} class="lg:px-3 p-1 lg:py-2 bg-gray-800 text-white text-xs lg:font-bold uppercase rounded">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        )
                    }
                </div>}

        </div >
    );
};

export default MyOrders;
