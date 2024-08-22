import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useResturantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    
    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)
    const [showIndex, setShowIndex] = useState(0)
    
    if (resInfo === null) return <Shimmer/>
    const {name, cuisines, costForTwoMessage, avgRating}   = resInfo?.cards[2]?.card?.card?.info
    const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
    c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    
    return (
        <div className="text-center">
             <h1 className="font-bold text-2xl my-6 ">{name}</h1> 
             <p className="font-bold text-lg " >
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
         {categories.map((category,index) => 
            <RestaurantCategory key ={category?.card.card.title} data={category?.card?.card}
           showItems= {index === showIndex? true :false} 
           setShowIndex ={()=> setShowIndex(index)}
           />
         )}
           
        </div>

    )
}

export default RestaurantMenu