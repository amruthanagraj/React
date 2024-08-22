import RestoCard from "./RestoCard"
import resList from "../utils/mockData"
import { useEffect, useState,useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { withPromotedLabel } from "./RestoCard"
import UserContext from "../utils/UserContext"

const Body = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState([])
    const [filteredRes, setFilteredRes] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const {loggedUser,setUserName} = useContext(UserContext)
    useEffect(
        () => {
            fetchData()}, []
    )
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9371531&lng=77.6901166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json)
        setListOfRestaurant(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRes(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    const onlineStatus = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel()
    if(onlineStatus === false)
         return( 
            <h1>You are offline !! check the internet connection</h1>
        )

    return listOfRestaurants.length == 0 ? (<Shimmer/>): (
    <div className="body">
        <div className="filter flex items-center">
            <div className="search py-2 p-4 m-4  ">
                <input className="border border-black border-solid" type="text" data-testid = "searchValue" value={searchValue} 
                onChange={(e) => {setSearchValue(e.target.value)}}/>
                <button className="bg-blue-400 px-4 mx-4 rounded-lg" onClick={()=>{
                    const filteredValue = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase()))
                    setFilteredRes(filteredValue)
                    console.log(filteredValue)
                }}>Search</button>
                
            </div>
            
            <div>
            <button className="flex btn-secondary bg-red-400 px-4 my-4 items-center rounded-lg"
            onClick={() => {
                const filterList = listOfRestaurants.filter(
                    (res)=> res.info.avgRating > 4
                );
                setFilteredRes(filterList)
            }}>
                Top Rated Restaurants
            </button>
            </div>
            <div className="border-b">
                <label>UserName: </label>
                <input value={loggedUser} onChange={(e)=>setUserName(e.target.value)}></input>
            </div>
        </div>
        <div className="flex flex-wrap">
            {filteredRes.map((restaurant) =>(
               <Link key={restaurant.info.id} to={"/restaurantMenu/" + restaurant.info.id} className="no-link"> 
               {/* {restaurant.info.aggregatedDiscountInfoV3.header !== "" ? (
                <RestaurantCardPromoted resData={restaurant} />
            ) : ( */}
                <RestoCard resData={restaurant} />
            {/* )} */}
               </Link>
            ))}
           
             
          
        </div>
    </div>
    )
}

export default Body
