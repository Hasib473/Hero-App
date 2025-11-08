import React from 'react';
import { FaDownload } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const AllProducts = ({ data }) => {
    const { image, title, downloads, ratingAvg } = data;
    return (
        <div>
            <div className="card bg-base-100 w-70 shadow-sm">
                <figure>
                    <img className='w-[250px] h-[150px] p-2 rounded-xl '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="p-2">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between mt-2 '>
                        <p className="p-1 bg-gray-200 text-green-300 rounded-md flex items-center gap-1 text-[10px] font-normal">
                            {downloads}
                            <FaDownload />
                        </p>

                        <p className='p-1 bg-orange-200 text-orange-500 rounded-md flex items-center gap-1 text-[10px] font-normal '><FcRating />
                            {ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;