import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchApiData();
    }, [])

    const fetchApiData = async () => {
        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6484063&lng=73.7645644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const apiJson = await apiData.json();
        setListOfRestaurant(apiJson.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(apiJson.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box" value={searchText}
                        onChange={(event) => {
                            console.log(event.target.value)
                            setSearchText(event.target.value)
                        }}
                    />
                    <button className="search-btn"
                        onClick={() => {
                            const searchFiltered = listOfRestaurant.filter(res => {
                                return (res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                                    res.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase()))
                            })
                            setFilteredRestaurant(searchFiltered);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filterTopRestaurants = listOfRestaurant.filter(res => res.info.avgRating >= 4);
                        setFilteredRestaurant(filterTopRestaurants)
                    }}
                >
                    Top Rated
                </button>
            </div>
            {
                listOfRestaurant.length === 0 ?
                    <Shimmer />
                    :
                    <div className="res-container">
                        {
                            filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />)
                        }
                    </div>
            }
        </div >)
};

export default Body;