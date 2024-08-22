
import { useState } from "react";
import ItemCards from "./ItemCards";
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false)
    const  handleClick =() => {
        setShowIndex()
    }
    return (
       
        <div>
        <div className=" mx-auto my-4 bg-slate-100 w-6/12 shadow-md p-4">
        <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
           
        </div>
       {showItems && <ItemCards items={data.itemCards}/>}
        </div>
        </div>

        
    )
}

export default RestaurantCategory;