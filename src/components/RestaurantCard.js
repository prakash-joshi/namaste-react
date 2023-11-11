import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } = props?.resData
    return (
        <div className="res-card">
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