import React from 'react';

const NotFound = () => {
    return (
        <div className='flex  items-center justify-center h-screen flex-col bg-gray-100'>
            <h1 class="font-bold text-blue-600 text-9xl">404</h1>
            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span class="text-red-500">Oops!</span> Page not found
            </h6>
        </div>
    );
};

export default NotFound;