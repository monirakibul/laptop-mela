import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const threeReview = reviews.slice(0, 3);

    const navigate = useNavigate();

    return (
        <div className='h-full bg-gray-100'>
            <div className="container bg-pink-200 flex items-center justify-center p-10">
                <div className='w-5/12 flex flex-col items-start'>
                    <h1 className='text-left text-3xl py-4 font-semibold text-indigo-600'>Laptop Mela</h1>
                    <p className='text-lg text-left'>Laptops are computers that you can take everywhere with you without hassle. They can take up very little space and be used for hours without access to power.</p>
                    <button type="button" className='mt-4 text-white bg-indigo-400 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                        Buy now
                    </button>
                </div>
                <div>
                    <img width="450px" src="https://i.ibb.co/64XVRgt/pngkey-com-laptop-png-19334.png" alt="" />
                </div>
            </div>
            <div className="pb-10">
                <h1 className='text-2xl py-4 font-semibold text-indigo-600 mt-10'>Recent 3 Reviews</h1>
                <div className='pb-10 grid grid-cols-3  gap-10 p-5 mt-4'>
                    {
                        threeReview.map(review => <Review review={review} key={review.id}></Review>)
                    }
                </div>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => navigate('/reviews')}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;