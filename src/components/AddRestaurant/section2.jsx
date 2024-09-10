import React from 'react';
import MoreInfo from '../ResDetails/info';
import { FcGlobe } from "react-icons/fc";
import { MdTableRestaurant } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";


const documents = [
    "FSSAI license copy (apply now)",
    "PAN card copy ",
    "Regular GSTIN (apply now) ",
    "Bank account details ",
    " Your restaurant menu",
    " Dish images for top 5 items",

]




const Section2 = () => {
    return (
        <>
            <div className='w-1/2 mx-auto bg-white rounded-xl z-50'>
                <h1 className='text-3xl text-bold text-center mt-10'>Get Started with online ordering</h1>
                <h1 className='text-gray-500 text-sm text-center'>Please keep the documents ready for a smooth signup</h1>

                <MoreInfo infoItems={documents} />
            </div>




            <div className="container w-10/12 mx-auto my-auto mt-32 px-4">
                <h2 className="text-3xl font-medium text-gray-800 text-center mb-4">Why should you partner with Zomato?</h2>
                <p className="text-lg text-gray-600 mt-3 mx-20 text-center mb-8">
                    Zomato enables you to get 60% more revenue, 10x new customers and boost your brand
                    visibility by providing insights to improve your business.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <FcGlobe className="w-8 h-8 mr-4" />
                            <div >
                                <span className="font-bold text-xl text-blue-600">1000+ cities</span>

                                <p>in India</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <MdTableRestaurant className="w-8 h-8 mr-4 text-blue-400" />
                            <div >
                                <span className="font-bold text-xl text-blue-600">3 lakh+</span>
                                <p>restaurant listings</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <FaRegCalendarCheck className="w-8 h-8 mr-4 text-blue-400" />
                            <div >
                                <span className="font-bold text-xl text-blue-600">5.0 crore+</span>
                                <p>monthly orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;
