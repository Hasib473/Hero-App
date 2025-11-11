import React from 'react';
import TrandingData from './TrandingData';
import { NavLink } from 'react-router';

const Tranding = ({ trandData }) => {
    return (
        <div>
            <div className='mt-10 text-center'>
                <h1 className='text-2xl font-bold'>Trending Apps</h1>
                <p className='text-[12px] font-normal'>Explore all the tranding app market  devloped by us</p>
            </div>

            <div className='w-11/12 mx-auto mt-8 grid grid-cols-4 gap-3'>

                {trandData.slice(0, 8).map(item => <TrandingData key={item.id} item={item}></TrandingData>)}


            </div>
            <div className='mt-8 text-center'>
                <NavLink to='/product'><button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white '>Show All</button>
                </NavLink>
            </div>

        </div>
    );
};

export default Tranding;