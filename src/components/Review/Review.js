import React from 'react';

const Review = (props) => {
    const { img, name, review, stars } = props.review;
    return (
        <div class="container max-w-sm  text-center bg-white rounded drop-shadow-lg px-5 md:px-0">
            <img src={img} width="50px" height="50px" alt="" />
            <h2>{name}</h2>
            <p>{review}</p>
            <p>{stars}</p>
        </div>
    );
};

export default Review;