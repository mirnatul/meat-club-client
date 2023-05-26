import React from 'react';

const PopularFood = ({ foodItem }) => {
    // console.log(foodItem);
    const { name, image } = foodItem;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure className='max-w-[600px] h-[240px]'><img className='object-fill' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#D61C4E] font-bold text-2xl">{name}</h2>
                    <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, alias laboriosam nemo quasi accusantium esse delectus maiores. Facere veniam tempora porro repellat. Enim, minus nobis accusamus ipsa dolor dignissimos error.</p>
                    <div className="card-actions justify-start">
                        <button className="bg-[#D61C4E] hover:bg-red-500 text-white font-semibold text-lg px-4 py-2 rounded-lg">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFood;