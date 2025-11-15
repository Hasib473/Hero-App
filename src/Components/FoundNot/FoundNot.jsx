import React from 'react';
import notfoundimg from '../../assets/error-404.png'
import { Link } from 'react-router';

const FoundNot = () => {
    return (
        <div>
            <div className='text-center mt-8'>
                <img className='mx-auto block w-[300px]' src={notfoundimg} alt="" />
                <h1 className='text-4xl font-bold mt-3'>Oops! Page Not Found </h1>
                <p className='text-sm font-regular mt-2'>The page You are lokking is not availabe</p>
                <Link to={'/'}><button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-2 mb-10'>Go Back</button></Link>
            </div>
            
        </div>
    );
};

export default FoundNot;