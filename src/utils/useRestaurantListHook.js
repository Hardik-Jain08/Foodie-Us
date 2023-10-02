import { useState , useEffect } from 'react'
import { swiggy_api_URL } from './constants';

const useRestaurantListHook = (resId) => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data1 = await fetch(swiggy_api_URL);
        // const data2 = await fetch(swiggy_api_URL);
        const json1 = await data1.json();
        // const json2 = await data2.json();
        // const arrayOfCards = { ...json1.data.cards, ...json2.data.cards };
        const arrayOfCards = json1.data.cards;
        // console.log(arrayOfCards);
        const restaurant_list = "restaurant_grid_listing";

        for (const cardObj of arrayOfCards) {
            if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
                const resData =
                    cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setListOfRestaurants(resData);
                setFilteredRestaurants(resData);
            }
        }
    }
    let searchText = '';
    const searchDataFun = (data) => {
        searchText = data;
    }
    const filterData = () => {
        let restaurant = listOfRestaurants.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestaurants(restaurant);
    }
    return [listOfRestaurants, filteredRestaurants, searchDataFun, filterData];
}

export default useRestaurantListHook;