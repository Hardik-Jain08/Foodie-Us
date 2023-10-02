import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const ItemList = ({ item}) => {

    const {
        price,
        defaultPrice,
        name,
        description,
        imageId
    } = item?.card?.info;
    return (
        <div className='p-4 m-4 flex justify-between bg-white'>
            <div className='flex flex-col w-[70%] space-y-3'>
                <span className='font-bold'>
                    {name}
                </span>
                <span className='font-semibold'>
                    ₹{price /100 || defaultPrice/100}
                </span>
                <span className='text-xs text-gray-500'>
                    {description}
                </span>
            </div>
            <div className='relative'>
                <img src={IMG_CDN_URL + imageId} alt="Dish" className='h-32 rounded-md' />
                <button className='absolute left-[30%] -bottom-[10%] font-bold bg-green-600 text-white hover:text-white hover:bg-orange-600 rounded-md px-4 py-1'>Add</button>
            </div>
        </div>
    )
}

export default ItemList