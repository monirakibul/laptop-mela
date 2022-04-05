import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const threeReview = reviews.slice(0, 3);
    return (
        <div className='h-screen bg-gray-100'>
            <div className="container m-10 mt-20 bg-white  flex items-center">
                <div className="info-container">
                    <h1 className='text-2xl py-4 font-semibold text-indigo-600'>Recent 3 Reviews</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at? Officia ducimus ut fuga labore!</p>
                </div>
                <div className="image-container">
                    <img src="https://i.ibb.co/64XVRgt/pngkey-com-laptop-png-19334.png" alt="" />
                </div>
            </div>
            <div className="reviews">
                <h1 className='text-2xl py-4 font-semibold text-indigo-600'>Recent 3 Reviews</h1>
                <div className=' bg-gray-100 grid grid-cols-3  gap-10 p-5 mt-10'>
                    {
                        threeReview.map(review => <Review review={review} key={review.id}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;