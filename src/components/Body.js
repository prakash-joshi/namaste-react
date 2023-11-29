import RestaurantCard, { withPromotedCard } from "./RestaurantCard";
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

    const PromotedRestaurantCard = withPromotedCard(RestaurantCard);

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
            <div className="flex justify-center">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText}
                        onChange={(event) => {
                            console.log(event.target.value)
                            setSearchText(event.target.value)
                        }}
                    />
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
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

                    <button className="px-4 py-1 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filterTopRestaurants = listOfRestaurant.filter(res => res.info.avgRating >= 4);
                            setFilteredRestaurant(filterTopRestaurants)
                        }}
                    >
                        Top Rated
                    </button>
                </div>
            </div>
            {
                listOfRestaurant.length === 0 ?
                    <Shimmer />
                    :
                    <div className="flex flex-wrap justify-center">
                        {filteredRestaurant.map(restaurant => {
                            return (
                                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                                    {restaurant.info.avgRatingString < 4 ?
                                        <PromotedRestaurantCard resData={restaurant.info}/>
                                        :
                                        <RestaurantCard resData={restaurant.info} />
                                    }
                                </Link>
                            )
                        })}
                    </div>
            }
        </div >)
};

export default Body;