import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-between max-w-[1000px] mx-auto mt-24'>
            <div className='text-center'>
                <h2 className='text-9xl font-bold text-red-600 my-6'>404</h2>
                <p className='text-6xl mb-4'>😵😵😵</p>
                <p className='text-4xl font-bold text-red-600 mb-16'>Page not found</p>
                <Link className='text-2xl font-medium text-blue-500 underline' to='/'>Continue to home</Link>
            </div>
            <div>
                <img className='max-w-[600px]' src={"https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png"} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;