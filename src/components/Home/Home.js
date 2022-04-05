import React from 'react';

const Home = () => {
    return (
        <div className='h-screen bg-gray-100'>
            <div className="flex">
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

            </div>
        </div>
    );
};

export default Home;