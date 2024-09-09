import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const MoreInfo = ({ infoItems }) => {
    console.log(infoItems)


    return (
        <div className="max-w-4xl mx-auto my-8">
            <h2 className="text-xl font-semibold mb-4">More Info</h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {infoItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        {/* {item.available ? ( */}
                        <FaCheckCircle className="text-teal-500" />
                        {/* ) : (
                            <FaTimesCircle className="text-red-500" />
                        )} */}
                        <span className="text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreInfo;
