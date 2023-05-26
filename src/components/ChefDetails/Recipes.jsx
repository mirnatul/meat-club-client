import React from 'react';
import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ singleRecipe }) => {
    const { image, name, rating, ingredients, cooking_method } = singleRecipe
    const [btnDisable, setBtnDisable] = useState(false);
    const notify = () => toast("Wow! Added to favorite");

    return (
        <div className='grid lg:grid-cols-4 gap-4 mb-2 p-4 max-w-[1200px] mx-auto'>
            <div>
                <img className='max-h-[200px]' src={image} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-xl font-medium text-red-600 mb-1'>{name}</h3>
                <p><span className='font-bold'>Ingredients:</span> <span>{ingredients.join(', ')}</span></p>
                <div className='my-1'>
                    <Rating placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    >
                    </Rating>
                </div>
                <div onClick={() => setBtnDisable(!btnDisable)}>
                    <button onClick={notify} className={`text-white py-2 px-2 rounded-md font-medium ${btnDisable ? 'bg-red-300' : 'bg-[#D61C4E]'}`} disabled={btnDisable}>Add to favorite</button>
                    <ToastContainer />
                </div>
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <h3 className='font-bold mb-1 text-lg'>Cooking method:</h3>
                <p className='text-slate-600'>{cooking_method.slice(0, 500)}</p>
            </div>
        </div>
    );
};

export default Recipes;