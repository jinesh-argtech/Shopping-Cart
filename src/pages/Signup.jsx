import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../services/authApi';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Dispatch signup action instead of login
        dispatch(signUp("Customer",values.firstName, values.lastName, values.email, values.password, values.confirmPassword, navigate));
    };

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <img className='mx-auto h-10 w-auto' src='https://www.svgrepo.com/show/301692/login.svg' alt='Workflow' />
                <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
                    Sign up for an account
                </h2>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor='firstName' className='block text-sm font-medium leading-5 text-gray-700'>First Name</label>
                                <input
                                    id='firstName'
                                    name='firstName'
                                    placeholder='First Name'
                                    type='text'
                                    required=''
                                    value={values.firstName}
                                    onChange={handleChange}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                />
                            </div>
                            <div>
                                <label htmlFor='lastName' className='block text-sm font-medium leading-5 text-gray-700'>Last Name</label>
                                <input
                                    id='lastName'
                                    name='lastName'
                                    placeholder='Last Name'
                                    type='text'
                                    required=''
                                    value={values.lastName}
                                    onChange={handleChange}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <label htmlFor='email' className='block text-sm font-medium leading-5 text-gray-700'>Email address</label>
                            <input
                                id='email'
                                name='email'
                                placeholder='user@example.com'
                                type='email'
                                required=''
                                value={values.email}
                                onChange={handleChange}
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-4 mt-6'>
                            <div>
                                <label htmlFor='password' className='block text-sm font-medium leading-5 text-gray-700'>Password</label>
                                <input
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    required=''
                                    value={values.password}
                                    onChange={handleChange}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                />
                            </div>
                            <div>
                                <label htmlFor='confirmPassword' className='block text-sm font-medium leading-5 text-gray-700'>Confirm Password</label>
                                <input
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type={showPassword ? 'text' : 'password'}
                                    required=''
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                                />
                            </div>
                        </div>

                        <div className='mt-6'>
                            <span className='block w-full rounded-md shadow-sm'>
                                <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
                                    Sign Up
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
