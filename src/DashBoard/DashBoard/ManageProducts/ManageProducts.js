import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch('https://fierce-stream-68374.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [control])


    const handleDelete = id => {
        const procedd = window.confirm('Are you sure to cancel the order??')
        if (procedd) {
            fetch(`https://fierce-stream-68374.herokuapp.com/products/${id}`, {
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
        <div className='flex flex-col'>
            {/* <h1 className='font-bebas-neue uppercase lg:text-4xl text-md font-black flex my-8 flex-col leading-none dark:text-white text-gray-600'>Manage All Products</h1> */}

            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class=" overflow-hidden border-b  border-gray-200 shadow">
                        <table className='min-w-full'>
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-2 text-md text-gray-500">
                                        Product ID
                                    </th>
                                    <th class="px-6 py-2 text-md text-gray-500">
                                        Product Name
                                    </th>

                                    <th class="px-6 py-2 text-md text-gray-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white overflow-x-auto">
                                {
                                    products.map(product =>

                                        <tr class="whitespace-nowrap">
                                            <td class="px-6 py-4 text-sm text-gray-500">
                                                {product._id}
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm text-gray-900">
                                                    {product.name}
                                                </div>
                                            </td>



                                            <td class="px-6 py-4">
                                                <button onClick={() => handleDelete(product._id)} class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</button>
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

export default ManageProducts;

{/* <div class="px-3 py-4  flex justify-center">
<table class="table-auto mx-2 w-full    text-md bg-white shadow-md rounded mb-4">
    <tbody className=''>
        <tr class="border-b">
            <th class="text-left p-3 px-5">Product Id</th>
            <th class="text-left p-3 px-5">Product Name</th>
            <th class="text-left p-3 px-5">Action</th>
        </tr>
        {
            products.map(product =>
                <tr class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 text-left px-5"><input type="text" value={product._id} class="bg-transparent" /></td>
                    <td class="p-3 text-left px-5"><input type="text" value={product.name} class="bg-transparent" /></td>

                    <td class="p-3 px-5 flex justify-start"><button onClick={() => handleDelete(product._id)} type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                </tr>
            )
        }

    </tbody>
</table>
</div> */}
