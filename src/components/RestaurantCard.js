import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla, id } = props?.resData
    return (
        <div id={id} className="m-4 p-4 w-[350px] h-[auto] rounded-lg bg-white hover:bg-gray-200">
            <img className="rounded-lg w-[340px] h-[225px]" src={CDN_URL + cloudinaryImageId} ></img>
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery Time {sla.deliveryTime} min</h4>
        </div>
    )
};

export default RestaurantCard;