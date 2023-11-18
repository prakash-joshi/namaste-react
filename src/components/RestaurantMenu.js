import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const { resid } = useParams();

    const fetchMenu = async () => {
        const apiData = await fetch(MENU_URL + resid);
        const apiJson = await apiData.json();
        setResInfo(apiJson);
    }

    if (resInfo === null) { return (<Shimmer />); }

    const { name, costForTwoMessage, cuisines, avgRating } = resInfo?.data?.cards[0]?.card?.card?.info;
    let itemCards = []
    if (resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards !== undefined) {
        itemCards = (resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
    }
    else {
        itemCards = (resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
    }

    return (
        <div>
            <h1> {name} </h1>
            <h3> {cuisines.join(", ")} </h3>
            <h3> {avgRating +  " ⭐"}  </h3>
            <h3> {costForTwoMessage} </h3>
            <h2>Recommendations</h2>
            <ul>
                {itemCards.map(item => { return (<li key={item.card.info.id}> {item.card.info.name + " : ₹ " + item.card.info.price/100} </li>) })}
            </ul>
        </div >
    );
}

export default RestaurantMenu;