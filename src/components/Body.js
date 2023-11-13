import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData"
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    const filterTopRestaurants = listOfRestaurant.filter(res => res.info.avgRating >= 4);

    useEffect(() => {
        const fetchApiData = async () => {
            const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6484063&lng=73.7645644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const apiJson = await apiData.json();
            // console.log(apiJson);
            setListOfRestaurant(apiJson.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants)
        }
        fetchApiData();
    }, [])

    return (
        <div className="body">
            <div className="search">Search</div>
            <button className="filter-btn" onClick={() => { setListOfRestaurant(filterTopRestaurants) }}> Top Rated </button>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />)
                }
            </div>
        </div>)
};

export default Body;