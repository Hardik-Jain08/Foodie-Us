import React from 'react'
import Search from './Search';
import RestaurantCard from './RestaurantCard';
import { ShimmerCard } from './ShimmerUI';
import useRestaurantListHook from '../utils/useRestaurantListHook';
import { useState } from 'react';
import FoodCarousel from './FoodCarousel';

const Body = () => {
    const [page, setPage] = useState(0);
    const [listOfRestaurants, filteredRestaurants, searchDataFun, filterData] = useRestaurantListHook(page);
    if (!listOfRestaurants.length || !filteredRestaurants) {
        return <ShimmerCard />
    }
    return (
        <div className='m-10 flex flex-col items-center'>
            <div className='w-full'>
                <FoodCarousel />
            </div>
            <Search searchDataFun={searchDataFun} filterData={filterData} />
            <div className='flex flex-wrap justify-center'>
                {filteredRestaurants.map((res, index) => {
                    return <RestaurantCard key={index} res={res.info} isLast={index===filteredRestaurants.length - 1} onIntersect={()=>{setPage(page=>page+1)}} />
                })}
            </div>
        </div>
    );
}
export default Body;