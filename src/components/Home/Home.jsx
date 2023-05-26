import React from 'react';
import { useLoaderData } from 'react-router-dom'
import AllChef from './AllChef';
import PopularFood from './PopularFood';
import foodItems from './ExtraTwoSectionData'

const Home = () => {
    const allChef = useLoaderData();
    return (
        <div className='mx-auto my-10 max-w-[1200px]'>
            <div className='relative mb-10'>
                <img className='w-[1200px] h-[80vh] opacity-30' src={"https://www.kerry.com/content/dam/kerry/en/images/products/food-and-beverage-applications/meat-and-plant-based-protein/plant-protein-feast.jpg"} alt="" />
                <div className='absolute w-full lg:w-[50%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center text-slate-700'>
                    <h2 className='lg:text-5xl text-2xl'>Welcome to <span className='lg:text-6xl font-bold text-3xl'>Meat Club</span></h2>
                    <p className='lg:text-2xl text-lg font-medium mt-12 my-4'>Where every flavor tells a story</p>
                    <p className='lg:text-md'>Some people say we live in a time of unlimited growth. I would have to say that those people are right and they go as far as we allow them. I think when people look in the food service industry they see something that probably only few of us see. That you can go as far as you want to, the sky is the limit and the limit is the sky. When we start to look at the many areas of the food service industry you can have your pick at which one you may select.</p>
                </div>
            </div>
            <div>
                <h2 className='my-20 lg:text-4xl text-lg text-center font-bold'>All the <span className='text-[#D61C4E]'>Turkish</span> Chef Around the Glob</h2>
                <div className='grid lg:grid-cols-3 gap-12 p-2'>
                    {
                        allChef.map(singleChef => <AllChef
                            key={singleChef._id}
                            singleChef={singleChef}
                        ></AllChef>)
                    }
                </div>
            </div>
            <div>
                <h2 className='my-20 lg:text-4xl text-lg text-center font-bold'>Our most popular food items</h2>
                <div className='grid lg:grid-cols-3 gap-12'>
                    {
                        foodItems.map(foodItem => <PopularFood
                            key={foodItem.id}
                            foodItem={foodItem}
                        ></PopularFood>)
                    }
                </div>
            </div>
            <div className='grid lg:grid-cols-2 mt-20 gap-10'>
                <div className='px-12'>
                    <h2 className='text-center font-bold lg:text-4xl text-lg text-[#D61C4E] mb-8'>Our services</h2>
                    <ul className='text-base text-slate-600 font-semibold'>
                        <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nesciunt?</li>
                        <li>2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus!</li>
                        <li>4. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, at.</li>
                        <li>5. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, at.</li>
                        <li>6. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, at.</li>
                    </ul>
                </div>
                <div>
                    <img className='px-12' src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;