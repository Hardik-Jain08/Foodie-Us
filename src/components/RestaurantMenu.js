import { React, useState } from 'react'
import useRestaurantMenuHook from '../utils/useRestaurantMenuHook'
import { useParams } from 'react-router-dom'
import { MENU_ITEM_TYPE_KEY } from '../utils/constants'
import ItemCategory from './ItemCategory'

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenuHook(resId);
  const {
    name,
    cuisines,
    areaname,
    deliverymsg,
    avgrating,
    totalratings,
    itemCards,
  } = restaurantData;
  const categories = itemCards.filter((item) => {
    return item?.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY;
  });
  const [showIndex, setShowIndex] = useState(0);
  return (
    <>
      <div className='w-6/12 bg-gray-50 mt-10 mx-auto'>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-around'>
            <span className='font-bold'>
              {name}
            </span>
            <p>
              {cuisines.join(", ")}
            </p>
            <p>
              <i className='fa-solid fa-location text-orange-500'> </i>
              {areaname}
            </p>
          </div>
          <div className='flex flex-col'>
            <span className='p-2 text-lg'>
              <i className='fa-solid fa-star text-green-500'></i>
              {avgrating}
            </span>
            <span className='p-2 text-sm'>
              {totalratings}
            </span>
          </div>
        </div>
        {categories.map((item, index) => {
          return <ItemCategory item={item?.card?.card}
            showlist={index === showIndex ? true : false}
            setShowIndex={()=>{ index === showIndex ? setShowIndex(null) : setShowIndex(index)}}
          ></ItemCategory>;
        })}
      </div>
    </>
  )
}

export default RestaurantMenu