import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla, id } = props?.resData
    return (
        <div id={id} className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery Time {sla.deliveryTime} min</h4>
        </div>
    )
};

export default RestaurantCard;