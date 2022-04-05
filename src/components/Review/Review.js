import React from 'react';

const Review = (props) => {
    const { img, name, review, stars } = props.review;
    return (
        <div className='flex mx-auto flex-col items-center p-5 container max-w-sm text-center bg-white rounded drop-shadow-lg px-5 md:px-0'>
            <img className='rounded-[50%]' src={img} width="50px" height="50px" alt="" />
            <h1 className='text-2xl py-4 font-semibold '> {name}</h1>
            <h5>{stars}</h5>
            <p className='m-4'>{review}</p>
        </div >
    );
};

export default Review;