import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import Recipes from './Recipes';

const ChefDetails = () => {
    const [allRecipe, setAllRecipe] = useState([])
    const singleChef = useLoaderData();
    const { image, name, bio, likes, recipes, experience } = singleChef;

    useEffect(() => {
        fetch('https://meat-club-server-li-pon.vercel.app/allRecipe')
            .then(res => res.json())
            .then(data => setAllRecipe(data)) // name, rating, image, cooking_method, ingredients[]
    }, [])
    return (
        <div className='bg-slate-100'>
            <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8 px-6 pt-16'>
                <div>
                    <img className='max-w-[500px] max-h-[400px] mx-auto' src={image} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='mb-4'><span className='text-3xl font-bold text-red-700'>{name}</span> <span>({experience} of experiences)</span></h3>
                    <p className='inline-flex items-center gap-1 text-lg font-medium'><FaHeart className='text-red-600 text-xl'></FaHeart>{likes}</p>
                    <p className='text-lg font-medium mb-4'>Number of recipes: {recipes}</p>
                    <p className='text-lg text-slate-500'>{bio}</p>
                </div>
            </div>
            <div>
                <h2 className='text-center lg:text-3xl text-xl mt-16 mb-8 font-bold'>All recipes of <span className='text-red-600'>{name}</span></h2>
                {
                    allRecipe.map(singleRecipe => <Recipes
                        key={singleRecipe._id}
                        singleRecipe={singleRecipe}
                    ></Recipes>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;