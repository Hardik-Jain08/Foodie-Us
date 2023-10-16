import { React, useState } from 'react'
import useRestaurantMenuHook from '../utils/useRestaurantMenuHook'
import ItemCategory from './ItemCategory'
import useCategories from '../utils/useCategories'

const RestaurantMenu = () => {
  const restaurantData = useRestaurantMenuHook();
  const {
    id,
    name,
    cuisines,
    areaname,
    avgrating,
    totalratings,
    itemCards,
  } = restaurantData;
  const categories = useCategories(itemCards);
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
          return <ItemCategory key={id+name+index} item={item?.card?.card}
            showlist={index === showIndex ? true : false}
            setShowIndex={()=>{ index === showIndex ? setShowIndex(null) : setShowIndex(index)}}
          ></ItemCategory>;
        })}
      </div>
    </>
  )
}

export default RestaurantMenu