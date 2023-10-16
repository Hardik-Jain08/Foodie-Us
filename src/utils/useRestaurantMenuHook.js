import { useEffect, useState } from 'react'
import { FETCH_MENU_URL } from './constants';
import { useParams } from 'react-router-dom';

const useRestaurantMenuHook = () => {
    const { resId } = useParams();
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
        window.scrollTo(0, 0);
    }, []);
    const fetchData = async () => {
        const data = await fetch(FETCH_MENU_URL + resId);
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