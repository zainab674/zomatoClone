import React, { useState, useEffect } from 'react';
import ContactCard from '../contactCard';
import MoreInfo from '../info';
import Cards from '../../../utils/cards';
import Restaurants from '../../../objects/restaurants';
import ReviewCard from '../../../utils/reviewCard';
import { useParams } from 'react-router-dom';
import ImageModal from '../../../utils/menuModal';

const Photos = () => {
    const { id } = useParams();

    const foundCard = Restaurants.find(c => c.id == id);
    console.log("found card", foundCard)
    const [card, setCard] = useState(foundCard);


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


            <div className=" mt-10">
                {/* Title */}
                <h1 className="text-lg font-medium text-gray-800">{card.title}</h1>
                <div className="flex  flex-wrap space-x-4">

                    {card.images.map((images, index) => (
                        <span key={index}>
                            {/* Image Card */}
                            <div className="mt-5 cursor-pointer" onClick={toggleModal}>
                                <img
                                    src={images}
                                    alt="Images"
                                    className="w-64 h-40 object-cover rounded-lg shadow-lg"
                                />

                            </div>

                        </span>
                    ))}
                </div>



                {/* Modal for displaying all images */}
                {isModalOpen && (

                    <ImageModal
                        images={card.images}
                        currentImageIndex={currentImageIndex}
                        onClose={toggleModal}
                        onNext={handleNextImage}
                        onPrev={handlePrevImage}
                    />
                )}
            </div>



        </>
    );
};

export default Photos;
