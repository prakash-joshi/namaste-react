import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resid) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const apiData = await fetch(MENU_URL + resid);
        const apiJson = await apiData.json();
        setResInfo(apiJson);
    }
    return resInfo;
}

export default useRestaurantMenu;