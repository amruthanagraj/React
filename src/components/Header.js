import { useContext, useState } from "react"
import { CDN_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import Grocery from "./Grocery"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
    const [btnName,setBtnName] = useState("Login")
    const {loggedUser} = useContext(UserContext)
    // console.log(loggedUser)
    const onlineStatus = useOnlineStatus()
    const cartItems = useSelector((store) =>store.cart.items )
    console.log(cartItems)
    return (
    <div className="flex justify-between bg-orange-100 sm:bg-orange-200 dark: bg-slate-700">
        <div className="w-40" >
            <img src={CDN_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status:{onlineStatus? "🟢" : "🔴"}
                </li>
                <li className="px-4">
                   <Link to="/"> Home</Link> 
                    </li>
                <li className="px-4">
                    <Link to="/about"> About</Link> 
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact</Link> 
                    </li>
                <li className="px-4">
                <Link to="/cart"> Cart-({cartItems.length} items)</Link> 
                </li>
                <li className="px-4">
                    <Link to="/grocery"> Grocery</Link> 
                    </li>
                <button className="login" 
                onClick={()=> {setBtnName("Logout")}}>{btnName}</button>
                 <li className="px-4">User:{loggedUser}</li>
            </ul>
        </div>

    </div>
    )
}

export default Header