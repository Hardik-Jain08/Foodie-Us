import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurantCard
 = ({ res }) => {
     const { name, cloudinaryImageId, cuisines, areaName, avgRatingString, sla, costForTwo, avgRating, id } = res;
     const path = "/restaurant/" + id;
     return (
        <Link to={path} >
        <div className='shadow-xl m-5 w-72 p-3 rounded hover:scale-[1.03] flex flex-col hover:cursor-pointer'>
            <img className='rounded-lg object-contain bg-white grow' src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant card" />
            <div>
                <div>
                    <h3 className='font-bold'>{ name }</h3>
                    <h5>{ cuisines.join(', ') }</h5>
                    <h5>{ areaName }</h5>
                </div>
                <span className='flex font-semibold p-2 justify-between'>
                    <h4 className={`${avgRating < 4 ? 'bg-orange-500' : 'bg-green-500'} px-1 rounded text-white`}>★{ avgRatingString }</h4>
                    <h4>•</h4>
                    <h4>{sla?.lastMileTravel ?? 2.0 }kms</h4>
                    <h4>•</h4>
                    <h4>{ costForTwo }</h4>
                </span>
            </div>
        </div>
        </Link>
    );
}
export default RestaurantCard
;