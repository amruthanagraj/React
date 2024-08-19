import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/createSlice";


const Cart = () =>{
    const dispatch = useDispatch()
    const clear = ()=>{
        dispatch(clearCart())
    }
    const cartItems = useSelector((store) =>store.cart.items )
    return <div className="text-center p-4 m-4">
        <h1 className=" text-2xl font-bold">Cart</h1>
        <button className="bg-black text-white rounded-lg m-2 p-2" 
        onClick={clear}>Clear Cart</button>
        {cartItems.length===0 && <h1>Your Cart is Empty Add your items here</h1>}
        <div className="w-6/12 m-auto ">{<ItemCards items={cartItems}/>}</div>
    </div>
}
export default Cart;