import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../services/authApi';

const AddProduct = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth)

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        image: null // For storing the image file
    });

    const handleChange = (event) => {
        if (event.target.name === 'image') {
            setValues({
                ...values,
                [event.target.name]: event.target.files[0] // Capture the selected image file
            });
        } else {
            setValues({
                ...values,
                [event.target.name]: event.target.value
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct(values.name, values.price, values.description, values.image, token));
        event.target.reset();
        setValues({
            name: "",
            description: "",
            price: "",
            image: null
        });
    };

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
                    Add a new product
                </h2>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium leading-5 text-gray-700'>Product Name</label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <input
                                    id='name'
                                    name='name'
                                    placeholder='Enter product name'
                                    type='text'
                                    required=''
                                    value={values.name}
                                    onChange={handleChange}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <label htmlFor='description' className='block text-sm font-medium leading-5 text-gray-700'>Description</label>
                            <div className='mt-1 rounded-md shadow-sm'>
                                <textarea
                                    id='description'
                                    name='description'
                                    placeholder='Enter product description'
                                    required=''
                                    value={values.description}
                                    onChange={handleChange}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <label htmlFor='price' className='block text-sm font-medium leading-5 text-gray-700'>Price</label>
                            <div className='mt-1 rounded-md shadow-sm'>
                                <input
                                    id='price'
                                    name='price'
                                    placeholder='Enter product price'
                                    type='number'
                                    required=''
                                    value={values.price}
                                    onChange={handleChange}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <label htmlFor='image' className='block text-sm font-medium leading-5 text-gray-700'>Image</label>
                            <div className='mt-1 rounded-md shadow-sm'>
                                <input
                                    id='image'
                                    name='image'
                                    type='file'
                                    accept='image/*'
                                    required=''
                                    onChange={handleChange}
                                    className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
                                />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <span className='block w-full rounded-md shadow-sm'>
                                <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
                                    Add Product
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
