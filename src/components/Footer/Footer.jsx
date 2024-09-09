import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";


const Footer = () => {
    return (
        <footer className="bg-gray-50 py-8">
            <div className="container mx-auto md:px-20 px-4">

                <header className="bg-white  border-b border-gray-200 mb-8">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="#" className="text-4xl font-extrabold italic text-gray-800">
                                zomato
                            </a>
                        </div>

                        {/* Country and Language Select */}
                        <div className="flex items-center space-x-4">
                            {/* Country Dropdown */}
                            <div className="relative inline-block">
                                <button
                                    type="button"
                                    className="flex items-center space-x-1 border border-gray-300 py-1 px-2 rounded-md bg-white text-gray-700 hover:bg-gray-100"
                                >
                                    <span className="flex items-center">
                                        <img
                                            src="path_to_india_flag.png" // Replace with the actual path to the flag image
                                            alt="India Flag"
                                            className="w-4 h-4 mr-1"
                                        />
                                        <span className='mx-2'>India</span>
                                    </span>
                                    <IoIosArrowDown />
                                </button>
                                {/* Country Dropdown Content - Add as needed */}
                            </div>

                            {/* Language Dropdown */}
                            <div className="relative inline-block">
                                <button
                                    type="button"
                                    className="flex items-center space-x-1 border border-gray-300 py-1 px-2 rounded-md bg-white text-gray-700 hover:bg-gray-100"
                                >
                                    <span className="flex items-center">
                                        <SlGlobe />
                                        <span className='mx-2'> English</span>
                                    </span>
                                    <IoIosArrowDown />
                                </button>
                                {/* Language Dropdown Content - Add as needed */}
                            </div>
                        </div>
                    </div>
                </header>




                <div className="flex flex-wrap justify-between text-sm text-gray-700">
                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h6 className="font-semibold mb-4 text-black">ABOUT ZOMATO</h6>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Who We Are</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Work With Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Investor Relations</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Report Fraud</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Press Kit</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h6 className="font-semibold mb-4 text-black">ZOMAVERSE</h6>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Zomato</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Blinkit</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Feeding India</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Hyperpure</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Zomato Live</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Zomaland</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Weather Union</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h6 className="font-semibold mb-4 text-black">FOR RESTAURANTS</h6>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Partner With Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Apps For You</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h6 className="font-semibold mb-4 text-black">LEARN MORE</h6>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Security</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Terms</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Sitemap</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/5">
                        <h6 className="font-semibold mb-4 text-black">SOCIAL LINKS</h6>
                        <div className="flex space-x-4 mb-5 text-black">
                            <a href="#" className=" hover:text-gray-700"><FaLinkedin /></a>
                            <a href="#" className=" hover:text-gray-700"><FaInstagramSquare /></a>
                            <a href="#" className=" hover:text-gray-700"><FaTwitter /></a>
                            <a href="#" className=" hover:text-gray-700"><FaYoutubeSquare /></a>
                            <a href="#" className=" hover:text-gray-700"><FaFacebookSquare /></a>


                        </div>
                        <div>
                            <a
                                href="#"
                                className="flex items-center justify-center w-32 h-10 mb-4 bg-gray-800 text-white rounded-md"
                            >
                                {/* <img src="https://via.placeholder.com/100x30" alt="Google Play" className="mr-2" /> */}
                                Google Play
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-32 h-10 bg-gray-800 text-white rounded-md"
                            >
                                {/* <img src="https://via.placeholder.com/100x30" alt="App Store" className="mr-2" /> */}
                                App Store
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-left text-gray-500 text-xs pt-4 mt-4 border border-t-gray-400">
                    <p>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
