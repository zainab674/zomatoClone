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




        <div className='md:mx-20 mt-5 '>
            {/* Sticky Element */}
            <div className='sticky top-0 bg-white z-20 h-40'>
                <div className='flex justify-between'>
                    <div className="text-3xl font-semibold text-gray-800">{card.title}</div>
                    <div className="w-1/2 flex justify-end ">
                        <RatingUtil />
                    </div>
                </div>
                <div className="font-light text-gray-600">
                    {card.cuisines.map((cuisine, index) => (
                        <span key={index}>
                            {cuisine}
                            {index < card.cuisines.length - 1 && ", "}
                        </span>
                    ))}
                </div>
                <div className="mt-1 text-sm font-light text-gray-400">
                    {card.city}, {card.country}
                </div>
                <div className="flex text-sm mt-1">
                    <span className="text-orange-600">Open now -</span>
                    <span className="ml-1 text-gray-600">
                        {card.time.startTime} - {card.time.endTime} (Today)
                    </span>
                    <span className="relative ml-2 cursor-pointer w-[13px] h-[13px]">
                        <div className="absolute top-full left-0 w-56 p-2 mt-1 border border-gray-300 rounded-md bg-white hidden group-hover:flex flex-col justify-center items-center text-gray-600">
                            <div className="text-lg font-medium text-gray-800">Opening Hours</div>
                            <div className="mt-2 text-sm">
                                Mon-Sun: <span className="ml-1">{card.time.startTime} - {card.time.endTime} </span>
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
