import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllChef = ({ setId, singleChef }) => {
    const { _id, name, image, experience, recipes, likes } = singleChef;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure className='max-w-[600px] h-[200px]'><img className='object-fill' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#D61C4E] font-bold text-2xl">{name}</h2>
                    <p className='text-base'>Number of recipes: <span className='font-bold'>{recipes}</span></p>
                    <p className='text-base'><span className='font-bold'>{experience}</span> of experience</p>
                    <p className='text-base font-bold inline-flex gap-2 items-center'><FaThumbsUp></FaThumbsUp>{likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef/${_id}`} className="bg-[#D61C4E] hover:bg-red-500 text-white font-bold text-lg px-4 py-2 rounded-lg">View Recipes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllChef;