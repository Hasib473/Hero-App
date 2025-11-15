import React from 'react';
import downimg from '../../assets/icon-downloads.png';
import ratingimg from '../../assets/icon-ratings.png';
import { removeApp } from '../localStorage';

const Installed = ({ apps, onUninstall }) => {

    const handleUninstall = () => {
        
        removeApp(apps.id);
        onUninstall(apps.id);
    };

    return (
        <div className="md:w-11/12 mx-auto">
            <div className='flex justify-between items-center p-2 bg-amber-50 shadow my-4 mt-7 rounded-lg'>
                <div className="mt-3 flex justify-baseline gap-4 items-center">
                    <img className="w-[100px] rounded-2xl" src={apps.image} alt={apps.title} />
                    <div className='p-2'>
                        <h1 className='text-xl font-bold'>{apps.title}</h1>
                        <div className='md:flex justify-baseline gap-3 mt-1'>
                            <p className='flex items-center gap-2 font-bold text-green-400'>
                                <img className='w-5' src={downimg} alt="downloads" /> {apps.downloads}
                            </p>
                            <p className='flex items-center gap-2 font-bold text-orange-400'>
                                <img className='w-5' src={ratingimg} alt="rating" /> {apps.ratingAvg}
                            </p>
                            <p className='font-bold text-violet-400'>{apps.size} MB</p>
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        onClick={handleUninstall}
                        className='btn text-white bg-green-400 cursor-pointer'

                    >
                        Uninstall
                    </button>
                    

                </div>
            </div>
        </div>
    );
};

export default Installed;
