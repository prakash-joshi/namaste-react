import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTLIST_API } from "../utils/constants";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchApiData();
    }, [])

    const fetchApiData = async () => {
        const apiData = await fetch(RESTAURANTLIST_API);
        const apiJson = await apiData.json();
        setListOfRestaurant(apiJson.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(apiJson.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useShowOnlineStatus();

    if (!onlineStatus) {
        return (<h1>Looks like you are Offline!!! Please check your internet connection.</h1>);
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
                        {filteredRestaurant.map(restaurant => {
                            return (
                                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                                    <RestaurantCard resData={restaurant.info} />
                                </Link>
                            )
                        })}
                    </div>
            }
        </div >)
};

export default Body;