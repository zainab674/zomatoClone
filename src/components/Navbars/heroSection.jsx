import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Import menu and close icons

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative bg-cover bg-center h-[70vh] z-49" style={{ backgroundImage: 'url("https://www.usatoday.com/gcdn/presto/2022/08/19/USAT/f2871962-4672-46f8-b5a2-b54a670307b4-GettyImages-1149135424.jpg?crop=2021,1137,x0,y170&width=660&height=371&format=pjpg&auto=webp")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative  z-50 p-4 sm:p-5 text-white text-sm sm:text-lg w-full">
                {/* Mobile menu button */}
                <div className="flex sm:hidden items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none z-50 "
                    >
                        {isOpen ? <HiX size={24} className='text-black' /> : <HiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`fixed inset-0 h-52 bg-white z-49 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col p-5">
                        {/* Get The App */}
                        <div className="flex justify-center mb-6">
                            <p className="text-sm sm:text-lg text-black">Get The App</p>
                        </div>


                        {/* Menu items */}
                        <ul className="flex flex-col items-center">
                            <li className="mb-4 text-black">Investor Relations</li>
                            <li className="mb-4 text-black">Add restaurant</li>
                            <li className="mb-4 text-black">Log in</li>
                            <li className="mb-4 text-black">Sign up</li>
                        </ul>
                    </div>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center justify-between px-10">
                    <div>

                        <p className="text-xs sm:text-sm">Get The App</p>
                    </div>
                    <div>
                        <ul className="flex space-x-4 ">
                            <li className="mb-2 sm:mb-0">Investor Relations</li>
                            <li className="mb-2 sm:mb-0">Add restaurant</li>
                            <li className="mb-2 sm:mb-0">Log in</li>
                            <li className="mb-2 sm:mb-0">Sign up</li>
                        </ul>
                    </div>
                </div>


            </div>




            <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 mt-4">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 italic">zomato</h1>
                <p className="text-lg md:text-4xl mb-8">Discover the best food & drinks in Sri Ganganagar</p>

                <div className="w-full max-w-3xl">
                    <div className="flex items-center bg-white  shadow-md rounded-lg overflow-hidden">
                        <div className="flex items-center px-4 py-2">
                            <IoLocationSharp className="text-red-400 text-xl" />
                            <select className="flex text-xs text-gray-700 focus:outline-none px-2 py-2 border-l">
                                <option>Sri Ganganagar</option>
                                <option>Detect current location using GPS</option>

                            </select>
                        </div>
                        <div className='flex w-full'>
                            <IoSearchOutline className='text-gray-400 text-2xl mt-1.5' />
                            <input
                                type="text"
                                placeholder="Search for restaurant, cuisine or a dish"
                                className="w-full px-2 py-2 text-gray-700 text-sm focus:outline-none"
                            />

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
