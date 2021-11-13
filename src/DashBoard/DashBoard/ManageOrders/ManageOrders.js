import React, { useEffect } from 'react';
import { useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch('https://fierce-stream-68374.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [control])

    const handleUpdate = id => {
        fetch(`https://fierce-stream-68374.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Status updated to shipped Successfully')
                    setControl(!control)
                }
                else {
                    setControl(false)
                }
            })
    }




    return (
        <div>
            <div>
                <div>
                    <div class="px-3 py-4 flex justify-center">
                        <table class="w-full text-md bg-white shadow-md rounded mb-4">
                            <tbody>
                                <tr class="border-b">
                                    <th class="text-left p-3 px-5">Customer Name</th>
                                    <th class="text-left p-3 px-5">Phone No</th>
                                    <th class="text-left p-3 px-5">Product Name</th>
                                    <th class="text-left p-3 px-5">Status</th>
                                </tr>
                                {
                                    orders.map(order =>
                                        <tr class="border-b hover:bg-orange-100 bg-gray-100">
                                            <td class="p-3 text-left px-5">
                                                <input type="text" value={order.username
                                                } class="bg-transparent" />
                                            </td>
                                            <td class="p-3 text-left px-5">
                                                <input type="text" value={order.phone
                                                } class="bg-transparent" />
                                            </td>

                                            <td class="p-3 text-left px-5">
                                                <input type="text" value={order.name} class="bg-transparent" />
                                            </td>

                                            <td class="p-3 px-5 flex justify-start"><button onClick={() => handleUpdate(order._id)} type="button" class={order.status === "shipped" ? "text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" : "text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"}>{order.status}</button></td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageOrders;