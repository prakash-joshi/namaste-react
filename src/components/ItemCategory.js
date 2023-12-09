import { useState } from "react";
import ItemList from "./ItemList";

const Itemcategory = ({ data, showItemIndex, setShowItemIndex }) => {

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // setShowItems(!showItems);
        setShowItemIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItemIndex && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default Itemcategory;
