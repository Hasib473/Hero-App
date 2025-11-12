import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
import reviewimg from '../../assets/icon-review.png'
import AppRatings from '../barChart/BarChart';
import { addToStoredDB } from '../localStorage';

const AppInfo = () => {
  const { id } = useParams();
  const ids = parseInt(id);
  const data = useLoaderData();
  const infoData = data.find(apps => apps.id === ids);

  const { image, description, companyName, title, ratingAvg, reviews, downloads, size } = infoData;

   const handleAddToReadList = (id) => {
        addToStoredDB(id);
    }

  return (
    <div className='w-11/12 mx-auto mt-5'>
      <div className='flex justify-baseline gap-4 pb-3 border-b border-gray-400'>
        <img className='w-[300px]' src={image} alt="appk-image" />
        <div>
          <h1 className='text-2xl font-bold'>{title}: {description}</h1>
          <h1 className='text-sm font-normal text-gray-400 mt-2 pb-4 border-b border-gray-400'>
            Developed by: <span className='text-violet-600'>{companyName}</span>
          </h1>

          <div className='flex justify-baseline gap-7 mt-5'>
            <div className='space-y-1'>
              <img className='w-[30px]' src={downloadimg} alt="" />
              <p className='text-[10] font-normal'>Downloads</p>
              <p className='text-2xl font-bold'>{downloads}</p>
            </div>
            <div className='space-y-1'>
              <img className='w-[30px]' src={ratingimg} alt="" />
              <p className='text-[10] font-normal'>Average Rating</p>
              <p className='text-2xl font-bold'>{ratingAvg}</p>
            </div>
            <div className='space-y-1'>
              <img className='w-[30px]' src={reviewimg} alt="" />
              <p className='text-[10] font-normal'>Total Review</p>
              <p className='text-2xl font-bold'>{reviews}</p>
            </div>
          </div>

          <button onClick={() => handleAddToReadList(id)} className='btn mt-2 bg-green-400 text-white'>Install Now ({size} MB)</button>
        </div>
      </div>

      {/* Pass selected app as prop to AppRatings */}
      <AppRatings app={infoData} />
    </div>
  );
};

export default AppInfo;



