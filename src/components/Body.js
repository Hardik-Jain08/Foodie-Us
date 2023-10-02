import React from 'react'
import Search from './Search';
import RestaurantCard from './RestaurantCard';
import ShimmerUI from './ShimmerUI';
import useRestaurantListHook from '../utils/useRestaurantListHook';

const Body = () => {
    
    const [listOfRestaurants, filteredRestaurants, searchDataFun, filterData] = useRestaurantListHook();
    
    if (!listOfRestaurants.length || !filteredRestaurants) {
        return <ShimmerUI />
    }
    return (
        <div className='m-10 flex flex-col items-center'>
            <Search searchDataFun={searchDataFun} filterData={filterData} />
            <div className='flex flex-wrap justify-center'>
                {filteredRestaurants.map((res, key) => {
                    return <RestaurantCard key={res.info.id} res={res.info} />
                })}
            </div>
        </div>
    );
}
export default Body;