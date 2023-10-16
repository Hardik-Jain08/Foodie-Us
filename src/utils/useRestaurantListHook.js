import { useState , useEffect } from 'react'
import { RES_API } from './constants';

const useRestaurantListHook = (page) => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        // console.log("Data is fetched", page);
        fetchData();
    }, [page]);

    const fetchData = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        // console.log(json);
        const arrayOfCards = json.data.cards;
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