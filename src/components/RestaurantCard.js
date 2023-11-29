import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla, id } = props?.resData
    return (
        <div id={id} className="m-4 p-4 w-[350px] h-[auto] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg w-[340px] h-[225px]" src={CDN_URL + cloudinaryImageId} ></img>
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery Time {sla.deliveryTime} min</h4>
        </div>
    )
};

export const withPromotedCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute px-2 mx-4 py-2 bg-black text-white rounded-lg"> Promoted </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;