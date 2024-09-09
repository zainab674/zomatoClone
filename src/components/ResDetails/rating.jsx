import React from 'react';
import { FaStar } from "react-icons/fa6";

const RatingUtil = () => {
    return (

        <div className="flex items-center space-x-6">
            {/* Dining Ratings */}
            <div className="flex items-center space-x-2">
                <div className="bg-green-700 text-white rounded-lg px-2 py-1 text-sm font-semibold">
                    4.7★
                </div>
                <div>
                    <p className="text-sm font-medium">136</p>
                    <p className="text-xs text-gray-500">Dining Ratings</p>
                </div>
            </div>

            {/* Delivery Ratings */}
            <div className="flex items-center space-x-2">
                <div className="bg-green-700 text-white rounded-lg px-2 py-1 text-sm font-semibold">
                    4.3★
                </div>
                <div>
                    <p className="text-sm font-medium">15.9K</p>
                    <p className="text-xs text-gray-500">Delivery Ratings</p>
                </div>
            </div>


        </div>
    );
};

export default RatingUtil;
