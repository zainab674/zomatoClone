import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { useParams } from 'react-router-dom';
import Restaurants from '../../../objects/restaurants';
import ReviewCard from '../../../utils/reviewCard'; // Import the ReviewCard component

const Reviews = () => {
    const { id } = useParams();
    console.log("id", id)
    const foundCard = Restaurants.find(c => c.id == id);
    console.log("found card", foundCard)
    const [card, setCard] = useState(foundCard);


    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Restaurants.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);

    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3;



    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    console.log("cardddd", card)
    if (!card) return <div>Loading...</div>;

    // Calculate the index of the first and last review to be displayed
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = card.reviews.slice(indexOfFirstReview, indexOfLastReview);

    return (
        <div className=" mt-10 w-full">
            {/* Title */}
            <h1 className="text-lg font-medium text-gray-800">{card.title}</h1>
            <h1 className="text-lg font-medium text-gray-500">Reviews</h1>


            {/* Reviews */}
            <div className="mt-10">
                {currentReviews.map((review, index) => (
                    <ReviewCard key={index} card={review} />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-5 flex justify-center">
                <Pagination
                    current={currentPage}
                    pageSize={reviewsPerPage}
                    total={card.reviews.length}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
};

export default Reviews;
