import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import CardCrousel from '../../utils/AddCardCrousel';


const cards = [
    {
        id: 1,
        name: "The Spicy ",
        img: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg",
        desc: "Start taking orders online from millions of users near you and deliver with Zomato",
    },
    {
        id: 2,
        name: "Pizza ",
        img: "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-many-different-kinds-of-dishes-and-foods-image_2951715.jpg",
        desc: "Start taking orders online from millions of users near you and deliver with Zomato",
    },
    {
        id: 3,
        name: "Burger ",
        img: "https://cdn.stocksnap.io/img-thumbs/280h/strawberry-food_PROXEBKRSP.jpg",
        desc: "Start taking orders online from millions of users near you and deliver with Zomato",
    },
    {
        id: 4,
        name: "Americans",
        img: "https://assets.cntraveller.in/photos/60f6d111a77bf98b83f5364c/16:9/w_1280,c_limit/Ahmedabad%20Food%20Guide.jpg",
        desc: "Start taking orders online from millions of users near you and deliver with Zomato",
    },

    {
        id: 5,
        name: "KFC",
        img: "https://images.ctfassets.net/pxcfulgsd9e2/articleImage76944/fced4ee60a24295b593cd6214c61e69d/Foods-with-high-water-content-HN1023-iStock-578273202-Sized.jpg",
        desc: "Start taking orders online from millions of users near you and deliver with Zomato",
    },
    {
        id: 6,
        name: "Nagpal ",
        img: "https://cdn.pixabay.com/photo/2024/02/23/08/27/apple-8591539_1280.jpg",
        desc: "Start taking orders online from millions of users near you and deliver with Zomato",
    },



]


const Section3 = () => {
    return (
        <div className="w-10/12 mx-auto mt-20">
            <h2 className="text-center text-2xl font-bold mb-8">How it works?</h2>
            <div className="flex justify-center space-x-4">
                <div className="w-1/4 bg-white shadow-lg rounded-lg">
                    <div className="h-32 bg-blue-200 rounded-t-lg"></div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Step 1</h3>
                        <h4 className="text-sm font-medium mb-2">Create your page on Zomato</h4>
                        <p className='text-sm'>Help users discover your place by creating a listing on Zomato</p>
                    </div>
                </div>

                <div className="w-1/4 bg-white shadow-lg rounded-lg">
                    <div className="h-32 bg-green-200 rounded-t-lg"></div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Step 2</h3>
                        <h4 className="text-sm font-medium mb-2">Register for online ordering</h4>
                        <p className='text-sm'>And deliver orders to millions of customers with ease</p>
                    </div>
                </div>

                <div className="w-1/4 bg-white shadow-lg rounded-lg">
                    <div className="h-32 bg-yellow-200 rounded-t-lg"></div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Step 3</h3>
                        <h4 className="text-sm font-medium mb-2">Start receiving orders online</h4>
                        <p className='text-sm'>Manage orders on our partner app, web dashboard or API partners</p>
                    </div>
                </div>
            </div>




            <div className='mt-20 mb-20'>
                <h2 className="text-center text-3xl font-semibold mb-8">Already have your restaurant listed?</h2>
                <h2 className="text-center text-xl font-medium mb-8">Search here and claim the ownership of your restaurant</h2>

                <div className="flex items-center bg-white  shadow-md rounded-lg overflow-hidden mx-20">
                    <div className="flex items-center px-4 py-2">
                        <IoLocationSharp className="text-gray-700 text-xl" />
                        <select className="flex text-xs text-gray-700 focus:outline-none px-2 py-2 border-l">
                            <option>Sri Ganganagar</option>
                            <option>Detect current location using GPS</option>

                        </select>
                    </div>
                    <div className='flex w-full'>
                        {/* <IoSearchOutline className='text-gray-400 text-2xl mt-1.5' /> */}
                        <input
                            type="text"
                            placeholder="Search for restaurant, cuisine or a dish"
                            className="w-full px-2 py-2 text-gray-700 text-sm focus:outline-none"
                        />

                    </div>


                </div>

            </div>



            <div className="cards">
                <h1 className='text-4xl font-medium text-center'>Our Products</h1>
                <CardCrousel Menu={cards} />
            </div>
        </div>
    );
};

export default Section3;
