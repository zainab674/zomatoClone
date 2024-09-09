import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import fone from "./../../assets/fone.png"


const DownloadApp = () => {
    const [selectedMethod, setSelectedMethod] = useState('email');

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
    };
    return (

        <div className='md:px-20 px-4 mt-20'>
            <div className="mb-20">
                <h1 className="text-2xl sm:text-3xl text-gray-700 font-medium mb-10">
                    Popular localities in and around <span className="font-semibold">Sri Ganganagar</span>
                </h1>

                <button className="flex justify-between border border-gray-200 p-4 sm:p-2">
                    <div className="mb-2 sm:mb-0 sm:mr-10 text-left">
                        <p className="text-lg sm:text-xl">Sri Ganganagar locality</p>
                        <p className="text-gray-500">356 places</p>
                    </div>
                    <MdKeyboardArrowRight className="sm:mt-5 text-2xl self-center sm:self-auto" />
                </button>
            </div>



            <div className="flex flex-col lg:flex-row justify-center items-start mb-20 mt-32 px-4">
                <div className="left hidden lg:block">
                    <img src={fone} alt="" className="w-72" />
                </div>
                <div className="right w-full lg:w-1/2 lg:pr-14">
                    <div className="mb-4 text-left">
                        <h1 className="text-3xl lg:text-4xl font-medium text-black">Get the Zomato app</h1>
                    </div>

                    <div className="mb-4 text-sm text-center lg:text-left text-gray-600">
                        <p>We will send you a link, open it on your phone to download the app</p>
                    </div>

                    <div className="flex justify-start mb-4">
                        <div className="flex items-center mr-8">
                            <input
                                type="radio"
                                id="email"
                                name="contact-method"
                                value="email"
                                checked={selectedMethod === 'email'}
                                onChange={() => handleMethodChange('email')}
                                className="mr-2"
                            />
                            <label htmlFor="email" className="text-gray-700">Email</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="phone"
                                name="contact-method"
                                value="phone"
                                checked={selectedMethod === 'phone'}
                                onChange={() => handleMethodChange('phone')}
                                className="mr-2"
                            />
                            <label htmlFor="phone" className="text-gray-700">Phone</label>
                        </div>
                    </div>

                    {selectedMethod === 'email' && (
                        <div className="mb-4">
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full lg:w-11/12 p-2 border mr-1 border-gray-300 rounded-l-md"
                                />
                                <button className="p-2 bg-rose-500 text-white rounded-r-lg whitespace-nowrap">Share App Link</button>
                            </div>
                        </div>
                    )}
                    {selectedMethod === 'phone' && (
                        <div className="mb-4">
                            <div className="flex items-center">
                                <div className="focus:outline-rose-600 flex items-center">
                                    <select
                                        className="p-2 border-r border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="+1">+1 (US)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+91">+91 (IN)</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="type here"
                                        className="w-full lg:w-11/12 p-2 border mr-1 rounded-l-md focus:outline-none"
                                    />
                                </div>
                                <button className="p-2 bg-rose-500 text-white rounded-r-lg whitespace-nowrap">Share App Link</button>
                            </div>
                        </div>
                    )}

                    <div className="mb-4 text-left text-gray-600">
                        <p>Download the app from</p>
                    </div>

                    <div className="block md:flex justify-start gap-4">
                        <a
                            href="#"
                            className="flex items-center justify-center w-32 h-10 mb-4 bg-gray-800 text-white rounded-md"
                        >
                            Google Play
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center w-32 h-10 bg-gray-800 text-white rounded-md"
                        >
                            App Store
                        </a>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default DownloadApp;
