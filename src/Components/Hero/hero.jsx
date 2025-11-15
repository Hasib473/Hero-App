import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import heroimg from '../../assets/hero.png'
import { NavLink } from 'react-router';



const Hero = () => {
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className='text-4xl font-bold'>We Build<br /><span className='text-violet-600'>Productive</span> Apps</h1>
                <p className='text-[14px] font-normal mt-2'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='text-center mt-4 '>
                <NavLink to='https://play.google.com/store/games?hl=en'> <button className='btn '> <FaGooglePlay />
                    Google Play</button></NavLink>

                <NavLink to='https://www.apple.com/app-store/'><button className='btn ml-2'><FaAppStoreIos />

                    Apps Store</button></NavLink>
            </div>

            <div className=' mt-10'>
                <img className='max-h-[350px] max-w-auto mx-auto' src={heroimg} alt="" />
            </div>

            <div className='border-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-[-2px] '>
                <p className='text-center text-3xl font-semibold  mt-6'>Trusted by Millions, Built for You</p>
                <div className='flex justify-center items-center gap-5 md:gap-20 mt-4 mb-6'>
                    <div className='space-y-2'>
                        <p className='text-[10px] font-normal'>Total Downloads</p>
                        <p className='text-4xl font-bold'>29.6M</p>
                        <p className='text-[10px] font-normal'>21% More then last Months</p>

                    </div>
                    <div className='space-y-2'>
                        <p className='text-[10px] font-normal'>Total Review</p>
                        <p className='text-4xl font-bold'>906k</p>
                        <p className='text-[10px] font-normal'>46% More then last Months</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-[10px] font-normal'>Active Apps</p>
                        <p className='text-4xl font-bold'>132+</p>
                        <p className='text-[10px] font-normal'>31 More will launch soon</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;