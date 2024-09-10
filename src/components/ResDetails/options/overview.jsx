import React, { useState, useEffect } from 'react';
import ContactCard from '../contactCard';
import MoreInfo from '../info';
import Cards from '../../../utils/cards';
import Restaurants from '../../../objects/restaurants';
import ReviewCard from '../../../utils/reviewCard';
import { useParams } from 'react-router-dom';
import ImageModal from '../../../utils/menuModal';
import Reviews from './reviews';

const Overview = () => {
    const { id } = useParams();

    const foundCard = Restaurants.find(c => c.id == id);
    console.log("found card", foundCard)
    const [card, setCard] = useState(foundCard);
    const [review, setReview] = useState(false);
    const openReview = () => {
        setReview(true);
    }


    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Restaurants.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % card.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + card.images.length) % card.images.length);
    };

    if (!card) return <div>Loading...</div>;
    return (
        <>
            <div className="flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="md:w-2/3 p-2">
                    {/* About this place Heading */}
                    <h1 className="text-2xl font-medium mb-4">About This Place</h1>

                    {/* Buttons Section */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <button className="flex items-center border rounded-lg bg-white shadow-md w-full md:w-auto">
                            <img src="https://cdn-icons-png.flaticon.com/512/577/577994.png" alt="Well Sanitized Kitchen" className="w-12 h-12 rounded-full" />
                            <div className="flex-1 ml-2">
                                <p className="text-xs whitespace-nowrap">RESTAURANT SAFETY MEASURE</p>
                                <p className="text-sm">Well Sanitized Kitchen</p>
                            </div>
                        </button>
                        <button className="flex items-center border rounded-lg bg-white shadow-md w-full md:w-auto">
                            <img src="https://e7.pngegg.com/pngimages/331/282/png-clipart-hand-washing-symbol-sign-symbol-miscellaneous-blue.png" alt="Rider Hand Wash" className="w-12 h-12 rounded-full" />
                            <div className="flex-1 ml-2">
                                <p className="text-xs whitespace-nowrap">Restaurant safety measure</p>
                                <p className="text-sm">Rider Hand Wash</p>
                            </div>
                        </button>
                        <button className="flex items-center border rounded-lg bg-white shadow-md w-full md:w-auto">
                            <img src="https://media.istockphoto.com/id/1214364766/vector/checking-body-temperature-line-icon-coronavirus-and-covid-19-temperature-scaning-sign-vector.jpg?s=612x612&w=0&k=20&c=KbgsTLh0Vb_9LIy8sCOkjwouWSmzGbeaOJ4y6J0HQ8s=" alt="Daily Temp. Checks" className="w-12 h-12 rounded-full" />
                            <div className="flex-1 ml-2">
                                <p className="text-xs whitespace-nowrap">RESTAURANT SAFETY MEASURE</p>
                                <p className="text-sm">Daily Temp. Checks</p>
                            </div>
                        </button>
                    </div>

                    {/* Menu Section */}
                    <div className="mb-6">
                        <h2 className="text-xl mb-2">Menu</h2>
                        <div className="flex items-center flex-wrap">
                            <img src={card.menu[0]} alt="Food Menu" className="w-32 h-32 object-cover mr-4" onClick={toggleModal} />
                            <p className="text-gray-700">Food Menu</p>
                        </div>
                    </div>
                    {isModalOpen && (

                        <ImageModal
                            images={card.menu}
                            currentImageIndex={currentImageIndex}
                            onClose={toggleModal}
                            onNext={handleNextImage}
                            onPrev={handlePrevImage}
                        />
                    )}
                    {/* Cuisines List */}
                    <div className="mb-6">
                        <h2 className="text-xl mb-2">Cuisines</h2>
                        <div className="flex flex-wrap gap-2">
                            {card.cuisines.map((cuisine, index) => (
                                <span key={index} className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full text-xs md:text-sm">
                                    {cuisine}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* People Say Section */}
                    <div className="mb-6">
                        <h2 className="text-xl mb-2">People Say This Place Is Known For</h2>
                        <p className="text-gray-700">Portion, Good Taste, Young Crowd, Good Service, Customizable Food, Delicious Food</p>
                    </div>

                    {/* Average Cost Section */}
                    <div>
                        <h2 className="text-xl my-2 mb-2">Average Cost</h2>
                        <p className="text-gray-700">₹{card.price} for {card.person} people (approx.)</p>
                        <p className="text-xs text-gray-500">Exclusive of applicable taxes and charges, if any</p>
                        <p className="text-xs text-gray-500">How do we calculate cost for two?</p>
                        <p className="text-xs text-gray-500">Digital payments accepted</p>
                    </div>

                    <MoreInfo infoItems={card.amenities} />

                    <div className="w-full md:w-1/2 mt-4">
                        <Cards location={Restaurants[0]} />
                    </div>

                    <div className="mt-10">
                        <h1 className="text-xl">Are you a food blogger?</h1>
                        <h1 className="text-sm text-red-500">Add Zomato spoonback to your blog</h1>
                    </div>

                    <div className="mb-6 mt-10">
                        <h2 className="text-xl mb-2">Review Highlights</h2>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {card.reviewCategory.map((cat, index) => (
                                <span key={index} className="p-2 text-gray-700 rounded-full border border-gray-200 font-light">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ReviewCard card={card.reviews[0]} />
                    <ReviewCard card={card.reviews[1]} />
                    <p className="text-red-600 hover:cursor-pointer" onClick={openReview}>View all reviews</p>
                    {review && (
                        <Reviews />
                    )}



                    <div className="mt-10">
                        <h1 className="text-lg">H E L P    U S    M A K E    Z O M A T O     B E T T E R</h1>
                        <h1 className="font-medium mt-4">Report an error in this listing</h1>
                        <h1 className="text-sm text-gray-500">Help us make Zomato more updated and relevant for everyone</h1>
                        <h1 className="text-sm text-red-500">Report Now</h1>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/3 p-4 mt-10 bg-gray-100">
                    <div className="sticky top-16 md:top-44">
                        <ContactCard />
                    </div>
                </div>
            </div>




            <div className="container w-11/12 p-4 mt-10">
                <h2 className="  font-medium text-lg mb-4">
                    RELATED TO THE SPICY SAGA, SRI GANGANAGAR LOCALITY
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                    Restaurants in Sri Ganganagar, Sri Ganganagar Restaurants, Sri
                    Ganganagar Locality restaurants, Best Sri Ganganagar Locality
                    restaurants, Sri Ganganagar City restaurants, Café in Sri Ganganagar,
                    Café near me, Café in Sri Ganganagar Locality, in Sri Ganganagar, near
                    me, in Sri Ganganagar Locality, in Sri Ganganagar, near me, in Sri
                    Ganganagar Locality, Order food online in Sri Ganganagar Locality, Order
                    food online in Sri Ganganagar
                </p>
                <h3 className="  font-medium text-lg mb-2">
                    FREQUENT SEARCHES LEADING TO THIS PAGE
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                    spicy saga ganganagar, the spicy saga menu, the spicy saga sri ganganagar locality menu, the spicy saga sri ganganagar
                </p>

            </div>
        </>
    );
};

export default Overview;
