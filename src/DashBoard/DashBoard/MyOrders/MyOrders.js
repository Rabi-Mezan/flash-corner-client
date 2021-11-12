import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [order, setOrder] = useState([])
    const [control, setControl] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(result =>
                setOrder(result))
    }, [control])


    const handleCancle = id => {
        const procedd = window.confirm('Are you sure to cancel the order??')
        if (procedd) {
            fetch(`http://localhost:5000/orders/${id}`, {
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
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                {
                    order.map(pd => <div className=''>
                        <div class="p-3" >
                            <div class="lg:flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden" style={{ minHeight: '200px' }}>
                                <div class="lg:w-1/3 p-3 bg-cover">
                                    <img src={pd.product.img} alt="" />
                                </div>
                                <div class="lg:w-2/3 p-4">
                                    <h1 class="text-gray-900 font-bold text-2xl">{pd.product.name}</h1>
                                    <p class="mt-2 text-gray-600 text-sm">{pd.product.description}
                                        <span className='ml-5 text-xs text-yellow-400'>
                                            {pd.status}
                                        </span>
                                    </p>

                                    <div class="flex items-center justify-around mt-5 ">
                                        <h1 class="text-gray-700 font-bold text-xl">৳{pd.product.price}</h1>

                                        <button onClick={() => handleCancle(pd._id)} class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    )
                }
            </div>

        </div >
    );
};

export default MyOrders;