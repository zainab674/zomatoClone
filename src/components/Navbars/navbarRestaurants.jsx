

import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from 'react-icons/hi'; // Import menu and close icons


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (


        <>
            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center justify-between px-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none z-50 "
                >
                    {isOpen ? <HiX size={24} className='text-black' /> : <HiMenu size={24} className='text-black' />}
                </button>
                <h1 className="text-4xl font-extrabold mt-2 mb-4 italic mr-5" >zomato</h1>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 h-52 bg-white z-50 transition-transform ${isOpen ? 'translate-y-20' : 'translate-x-full'}`}
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
            {/* //Desktop menu */}
            <div className='hidden md:flex  items-center md:px-20 px-1 pt-3 justify-between'>
                <div className="left flex items-center">
                    <h1 className="text-xl md:text-4xl font-extrabold mt-2 mb-4 italic mr-5" >zomato</h1>
                    <div className="flex items-center bg-white  rounded-lg overflow-hidden">
                        <div className="flex items-center px-2 py-2 w-auto">
                            <IoLocationSharp className="text-red-400 text-2xl" />
                            <select className="flex items-center text-sm appearance-none text-gray-700 focus:outline-none px-1 py-2 border-l w-32">
                                <option>Sri Ganganagar</option>
                                <option>Detect current location using GPS</option>
                            </select>

                            <IoIosArrowDown />
                            <p className='text-gray-300 mx-1'>|</p>
                        </div>
                        <div className='flex w-96'>
                            <IoSearchOutline className='text-gray-400 text-2xl mt-1.5' />
                            <input
                                type="text"
                                placeholder="Search for restaurant, cuisine or a dish"
                                className="w-full px-2 py-2 text-gray-800 text-sm focus:outline-none"
                            />

                        </div>


                    </div>
                </div>
                <div className="right">
                    <ul className="flex space-x-4  text-gray-500">

                        <li className="mb-2 sm:mb-0">Log in</li>
                        <li className="mb-2 sm:mb-0">Sign up</li>
                    </ul>
                </div>
            </div>


            <p className='text-gray-500 text-xs px-16 mt-8 '><span className='hover:text-rose-500'>Home</span> / <span className='hover:text-rose-500'>India</span> / <span className='hover:text-rose-500'>Sri Ganganagar</span>  / <span className='text-gray-400 hover:text-rose-500'>Sri Ganganagar Locality Restaurants</span> </p>




        </>
    )
}
export default NavBar