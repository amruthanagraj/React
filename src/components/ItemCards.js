import { CDN_URL, RESTO_IMG } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/createSlice"

const ItemCards = ({items}) => {
    const dispatch = useDispatch()
    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }
    return (
    <div>{items.map((item)=>(
        <div 
        key ={item.card.info.id} 
        className="  p-4 m-4 border-b-2 border-b-slate-400 text-left flex justify-between">
            
            <div className="w-9/12">
            <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span>- ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-sm overflow-hidden">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 px-2 relative">
    <div className="relative">
        <img src={RESTO_IMG + item.card.info.imageId} className="w-full h-auto" />
        <div className="absolute bottom-0 left-0 w-full">
            <button className="bg-white w-full px-2"
            onClick={()=>handleAddItem(item)}>- Add +</button>
        </div>
    </div>
</div>


        </div>
    ))}
    </div>

    )

}
 export default ItemCards