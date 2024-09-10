import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const MoreInfo = ({ infoItems }) => {
    console.log(infoItems)


    return (
        <div className="max-w-4xl mx-auto my-8 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">More Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {infoItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        {/* Conditional rendering based on availability */}
                        {/* {item.available ? ( */}
                        <FaCheckCircle className="text-teal-500 text-lg" />
                        {/* ) : (
                        <FaTimesCircle className="text-red-500 text-lg" />
                    )} */}
                        <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MoreInfo;
