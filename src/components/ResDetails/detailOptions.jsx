import React, { useState } from 'react';
import Overview from '../ResDetails/options/overview';
import Menu from './options/menu';
import Photos from './options/photos';
import Reviews from './options/reviews';
import OrderOnline from './options/orderOnline';

const DetailOptions = () => {
    const [activeTab, setActiveTab] = useState('orderOnline');

    const tabs = ['overview', 'orderOnline', 'reviews', 'photos', 'menu'];

    return (
        <div className="mx-1">
            <div className="flex space-x-4 mb-4">
                <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded">
                    Direction
                </button>
                <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded">
                    Bookmark
                </button>
                <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded">
                    Share
                </button>
            </div>
            <div className='sticky top-40 bg-white z-20 '>
                {/* Button Row */}


                {/* Tabs Row */}
                <div className="flex space-x-10 mt-2 border-b border-gray-400">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className={`relative cursor-pointer pb-2 transition-all duration-300 ${activeTab === tab ? 'text-red-500 border-red-500' : 'text-gray-600 border-none'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <span className={`capitalize`}>{tab}</span>
                            <div
                                className={`absolute bottom-0 left-0 w-full h-1 ${activeTab === tab ? 'bg-red-500' : ''
                                    }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="mt-6">
                {activeTab === 'overview' && <Overview />}
                {activeTab === 'orderOnline' && <OrderOnline />}
                {activeTab === 'reviews' && <Reviews />}
                {activeTab === 'photos' && <Photos />}
                {activeTab === 'menu' && <Menu />}
            </div>








        </div>




    );
};

export default DetailOptions;
