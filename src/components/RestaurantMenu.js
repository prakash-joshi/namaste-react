import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Itemcategory from "./Itemcategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resid } = useParams();
    const resInfo = useRestaurantMenu(resid);
    const [showItemIndex, setShowItemIndex] = useState();
    const openCloseAccordian = (index) => {
        if (showItemIndex === index) {
            setShowItemIndex();
        } else {
            setShowItemIndex(index);
        }
    }

    if (resInfo === null) { return <Shimmer />; }

    const { name, costForTwoMessage, cuisines, avgRating } = resInfo?.data?.cards[0]?.card?.card?.info;
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
        cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="p-4 m-5 text-center">
            <h1 className="font-bold my-6 text-2xl"> {name} </h1>
            <h3 className="font-bold text-lg"> {cuisines.join(", ")} </h3>
            <h3> {avgRating + " ⭐"} </h3>
            <h3> {costForTwoMessage} </h3>
            {categories.map((category, index) => (
                <Itemcategory
                    key={category.card.card.title}
                    data={category.card?.card}
                    showItemIndex={index === showItemIndex ? true : false}
                    setShowItemIndex={() => openCloseAccordian(index)}
                />
            ))}
        </div >
    );
}

export default RestaurantMenu;