import React from 'react';
import CalculateAverageRating from './calculateRating';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { apiConst } from '../constants/api.constants';

const Cards = ({ location, discount }) => {
    const averageRating = CalculateAverageRating(location.reviews); // Calculate average rating for each location
    const navigate = useNavigate();
    const handleDetail = (id) => {
        navigate(apiConst.RestaurantDetail.replace(':id', id))
    }
    console.log("disss", discount)
    return (

        <Card
            hoverable
            className="w-11/12 rounded-lg shadow-md"
            cover={
                <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-60 object-cover rounded-2xl"
                    onClick={() => handleDetail(location.id)}
                />
            }
        >
            {discount && location.discount &&


                <div className="absolute bottom-32 left-0 bg-blue-600 text-white font-medium px-2  ">
                    {location.discount}% OFF
                </div>


            }
            <Card.Meta
                title={
                    <h3 className="font-medium flex justify-between items-center  text-gray-900 whitespace-nowrap text-lg overflow-x-hidden">
                        <span className='w-10/12 overflow-x-hidden'>{location.title}</span>
                        <div className={`${averageRating >= 4 ? "bg-green-800  " : averageRating >= 3 && averageRating < 4 ? " bg-green-600" : " bg-green-500"}  flex items-center space-x-1 w-10 h-5 bg-green-700 text-white px-1 py-0 rounded-lg`}>
                            <span className="text-sm font-bold leading-none">{averageRating}</span>
                            <span className="text-xs">★</span> {/* Unicode for star symbol */}
                        </div>
                    </h3>
                }
            />
            <div className="mt-1">
                <div className="flex justify-between">
                    <div className="overflow-x-hidden w-1/2">
                        <div className="flex">
                            {location.cuisines.map((cuisine, index) => (
                                <span key={index} className="p-0.5 text-sm text-gray-500">
                                    {cuisine},
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-gray-400">
                        ₹{location.price} for {location.person}
                    </p>
                </div>

                {!discount && (
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-400">
                            {location.city}, {location.country}
                        </p>
                        <p className="text-sm text-gray-600">{location.distance} km</p>
                    </div>

                )}
                {discount && (
                    <div className="flex justify-end">

                        <p className="text-sm text-gray-600">{location.deliveryTime} min</p>
                    </div>

                )}

            </div>
        </Card>



    )
}
export default Cards;