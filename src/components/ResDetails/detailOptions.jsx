import React, { useState } from 'react';
import Overview from '../ResDetails/options/overview';
import Menu from './options/menu';
import Photos from './options/photos';
import Reviews from './options/reviews';
import OrderOnline from './options/orderOnline';

const DetailOptions = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = ['overview', 'orderOnline', 'reviews', 'photos', 'menu'];

    return (
        <div className="px-2 md:px-4">
            {/* Button Row */}
            <div className="flex flex-wrap space-x-2 md:space-x-4 mb-4">
                <button className="border border-gray-400 text-gray-600 px-3 py-1.5 rounded text-sm md:text-base">
                    Direction
                </button>
                <button className="border border-gray-400 text-gray-600 px-3 py-1.5 rounded text-sm md:text-base">
                    Bookmark
                </button>
                <button className="border border-gray-400 text-gray-600 px-3 py-1.5 rounded text-sm md:text-base">
                    Share
                </button>
            </div>

            <div className='md:sticky md:block hidden top-40 md:top-36 bg-white z-20 border-b border-gray-400'>
                {/* Tabs Row */}
                <div className="flex flex-wrap md:space-x-10 space-x-4 mt-2">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className={`relative cursor-pointer pb-2 transition-all duration-300 ${activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600 border-b-2 border-transparent'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <span className={`capitalize text-sm md:text-base`}>{tab}</span>
                            <div
                                className={`absolute bottom-0 left-0 w-full h-1 ${activeTab === tab ? 'bg-red-500' : 'bg-transparent'
                                    }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
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
