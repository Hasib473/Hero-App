import React from 'react';
import notfoundimg from '../../assets/App-Error.png'
import { NavLink } from 'react-router';

const NotFound = ({onGoBack}) => {
    return (
        <div className=' mt-10 mx-auto'>
            <img className='mx-auto block w-[300px]' src={notfoundimg} alt="" />

            <div className='text-center'>
                <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-sm font-normal mt-2'>The App you are requesting is not found on our system.  please try another apps</p>

        <button onClick={onGoBack} className='btn mt-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
            </div>
        </div>
    );
};

export default NotFound;