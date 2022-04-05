import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='h-screen bg-gray-100 p-5'>
            <h1 className='text-3xl py-4 mb-5 font-semibold text-indigo-600'>What our customers say!</h1>
            <div className='grid grid-cols-3  gap-10 '>


                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;