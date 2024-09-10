import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Restaurants from '../../objects/restaurants';
import { Divider } from 'antd';
const Gallery = () => {
    const { id } = useParams();

    const foundCard = Restaurants.find(c => c.id == id);
    console.log("found card", foundCard)
    const [card, setCard] = useState(foundCard);


    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Restaurants.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);

    if (!card) return <div>Loading...</div>;

    return (
        <div className='md:mx-20 mt-10'>
            <div className="md:grid grid-cols-3 gap-4 h-full w-full" id='photos'>
                {/* Large Image */}
                <div className="col-span-2 h-80">
                    <img
                        src={card.images[0]}
                        alt="Large Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Smaller Images */}
                <div className="md:grid grid-rows-2 gap-4 h-80 hidden ">
                    <div className="grid grid-cols-2 gap-4 ">
                        <img
                            src={card.images[1]}
                            alt="Small Image 1"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={card.images[2]}
                            alt="Small Image 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={card.images[3]}
                            alt="Small Image 3"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src={card.images[4]}
                            alt="Small Image 4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
