import { useParams } from "react-router-dom";
import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)
    useEffect( () => {
        fetchData();
    },[] )


   const  fetchData = async () =>
    {
        const data = await fetch( MENU_API + resId + "&catalog_qa=undefined&query=Biryani&submitAction=ENTER")
        const json = await data.json()
        console.log("menu data", json.data)
        setResInfo(json.data)
        
    }
    return (resInfo)
}

export default useRestaurantMenu;