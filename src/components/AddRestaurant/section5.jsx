import React from 'react';






const Section5 = () => {
    return (

        <>
            <div className="w-9/12 mx-auto my-10 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side */}
                <div className=" w-6/12 mb-8 md:mb-0 text-left">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-4">
                        Cannot find your favourite restaurant on Zomato?
                    </h1>
                    <h2 className="text-lg text-gray-600">
                        Submit the details and our team will get the restaurant onboard
                    </h2>
                </div>

                {/* Right Side (Form) */}
                <div className="md:w-7/12 w-full">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Restaurant name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Restaurant location"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Restaurant contact number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="What do you like about the restaurant?"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                    <p className="text-sm text-gray-500 mt-4">
                        Restaurant owners can add restaurant from <a href="#" className="text-blue-500">here</a>.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Section5;
