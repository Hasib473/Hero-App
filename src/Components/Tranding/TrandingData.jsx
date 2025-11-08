import React from 'react';

const TrandingData = ({ item }) => {
    console.log(item)
    const { image, title, downloads, ratingAvg } = item;
    return (
        <div className=''>

            <div className="card bg-base-100 w-70 shadow-sm">
                <figure>
                    <img className='w-[250px] h-[150px] p-2 rounded-xl '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="p-2">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between mt-2 border-2'>
                        <p>{downloads}</p>
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrandingData;