import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apiConst } from '../../constants/api.constants';

const Section1 = () => {
    const navigate = useNavigate();
    const onHome = () => {

        navigate(apiConst.Home)
    }
    return (
        <div className="relative bg-cover bg-center h-[70vh] z-49" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/various-vegetables-black-table-with-space-message_1220-616.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="nav relative  z-50  text-white flex justify-between items-center md:mx-40 mb-10">
                <div>
                    <h1 className='text-2xl font-bold italic mt-1 hover:cursor-pointer' onClick={onHome}>Zomato</h1>
                    <h1 className='text-lg font-bold'>For Business</h1>
                </div>
                <div className='flex justify-center space-x-6 items-center text-white'>
                    <button>Advertise</button>
                    <h1 className='border border-white px-4 py-2'>Login</h1>
                </div>

            </div>



            <div className="relative  z-50  text-white flex flex-col items-center justify-start">
                <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-semibold text-left mb-4">
                        Partner with Zomato
                    </h1>
                    <h2 className="text-3xl font-semibold text-left mb-4">
                        at 0% commission for the 1st month!
                    </h2>
                    <p className="text-lg text-left mb-8">
                        And get ads worth INR 1500. Valid for new restaurant partners in select
                        cities.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                            Register your restaurant
                        </button>
                        <button className="bg-white  text-black font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                            Login to view your existing restaurants
                        </button>
                    </div>
                    <p className="text-sm text-left mt-4">
                        Need help? Contact +91 97-38-38-38-38
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Section1;
