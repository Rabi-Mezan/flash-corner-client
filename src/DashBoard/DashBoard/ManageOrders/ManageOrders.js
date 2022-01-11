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
        <div className='flex flex-col'>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class=" overflow-hidden border-b  border-gray-200 shadow">
                        <table className='min-w-full'>
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-2 text-md text-gray-500">
                                        Customer Name
                                    </th>
                                    <th class="px-6 py-2 text-md text-gray-500">
                                        Phone Number
                                    </th>
                                    <th class="px-6 py-2 text-md text-gray-500">
                                        Product Name
                                    </th>

                                    <th class="px-6 py-2 text-md text-gray-500">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {
                                    orders.map(od =>

                                        <tr class="whitespace-nowrap">
                                            <td class="px-6 py-4 text-sm text-gray-500">
                                                {od.username}
                                            </td>
                                            <td class="px-6 py-4 text-sm text-gray-500">
                                                {od.phone}
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm text-gray-900">
                                                    {od.name}
                                                </div>
                                            </td>


                                            <td class="px-6 py-4">
                                                <button onClick={() => handleUpdate(od._id)} class={od.status === "shipped" ? "text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" : "text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"}>{od.status}</button>
                                            </td>
                                        </tr>)
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