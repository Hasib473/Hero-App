import React from 'react';
import { useLoaderData } from 'react-router';
import AllProducts from '../AllProduct/AllProducts';

const Product = () => {
    const allData = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-4'>Our All Applications</h1>
            <p className='text-center text-[12 px] font-normal mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between items-center mt-3 w-11/12 mx-auto'>
                <h1 className='text-xl font-bold'>({allData.length}) Apps Found</h1>

                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>


            <div className='w-11/12 mx-auto mt-8 grid grid-cols-4 gap-3'>
                {allData.map(data => <AllProducts key={data.id} data={data}></AllProducts>)}
            </div>
        </div>
    );
};

export default Product;