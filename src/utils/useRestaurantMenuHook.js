import { useEffect, useState } from 'react'
import { swiggy_menu_api_URL } from './constants';

const useRestaurantMenuHook = (resId) => {
    const restaurantStructure = {
        name: "",
        logo: "",
        id: "",
        cuisines: [],
        areaname: "",
        deliverymsg: "",
        avgrating: "",
        totalratings: "",
        itemCards: []
    }
    const [restaurant, setRestaurant] = useState(restaurantStructure);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        const card = json?.data?.cards[0]?.card?.card?.info;
        const cuisineDetails = (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards) ? (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards) : (json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        setRestaurant({
            name: card?.name,
            logo: card?.cloudinaryImageId,
            id: card?.id,
            cuisines: card?.cuisines,
            areaname: card?.areaName,
            deliverymsg: card?.feeDetails?.message,
            avgrating: card?.avgRatingString,
            totalratings: card?.totalRatingsString,
            itemCards: cuisineDetails
        });
    };
    return restaurant;
}

export default useRestaurantMenuHook