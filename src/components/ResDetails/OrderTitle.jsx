import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RatingUtil from './rating';
import Restaurants from '../../objects/restaurants';
import DetailOptions from './detailOptions';

const OrderTitleComponent = () => {

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




        <div className='px-4 md:px-20 mt-5'>
            {/* Sticky Element */}
            <div className='md:sticky top-0 bg-white z-20 p-4 md:p-6 shadow-md'>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-0">{card.title}</div>
                    <div className="w-full md:w-1/2 flex justify-end">
                        <RatingUtil />
                    </div>
                </div>
                <div className="font-light text-gray-600 text-sm md:text-base">
                    {card.cuisines.map((cuisine, index) => (
                        <span key={index}>
                            {cuisine}
                            {index < card.cuisines.length - 1 && ", "}
                        </span>
                    ))}
                </div>
                <div className="mt-1 text-xs md:text-sm font-light text-gray-400">
                    {card.city}, {card.country}
                </div>
                <div className="flex flex-col md:flex-row text-xs md:text-sm mt-1 items-start md:items-center">
                    <span className="text-orange-600">Open now -</span>
                    <span className="ml-1 text-gray-600">
                        {card.time.startTime} - {card.time.endTime} (Today)
                    </span>
                    <span className="relative ml-2 cursor-pointer w-5 h-5 md:w-6 md:h-6">
                        <div className="absolute top-full left-0 w-48 md:w-56 p-2 mt-1 border border-gray-300 rounded-md bg-white hidden group-hover:flex flex-col justify-center items-center text-gray-600">
                            <div className="text-sm md:text-lg font-medium text-gray-800">Opening Hours</div>
                            <div className="mt-1 text-xs md:text-sm">
                                Mon-Sun: <span className="ml-1">{card.time.startTime} - {card.time.endTime}</span>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <DetailOptions />
        </div>


    );
}

export default OrderTitleComponent;
