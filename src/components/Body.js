import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData"
import { useState } from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    const filterTopRestaurants = listOfRestaurant.filter(res => res.info.avgRating >= 4);

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