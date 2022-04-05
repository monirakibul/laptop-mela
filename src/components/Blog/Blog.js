import React from 'react';

const Blog = (props) => {
    const { title, body } = props.blog;
    return (

        <div class="grid col-span-4 sm:col-span-12 relative">
            <div class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9">

                <h1 class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> {title} </h1>

                <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> {body} </p>

                <div class="bg-pink-300 group-hover:bg-pink-500 h-full w-4 absolute top-0 left-0"> </div>

            </div>
        </div>
    );
};

export default Blog;