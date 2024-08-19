
import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"
const AppLayout = ()=> {
    const [userName,setUserName] = useState()
    useEffect(()=>{
        const data ={ 
            name:"Namaste"}
            setUserName(data.name)
    },[])
    return (
        <Provider store = {appStore}>
        <UserContext.Provider value={{loggedUser:userName,setUserName}}>
        <div className="app">
        {/* <UserContext.Provider value={{loggedUser:"Elon Musk"}}> */}
            <Header/>
            {/* </UserContext.Provider> */}
            <Outlet/>
            
            
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const appRouting = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading About page</h1>}><About/></Suspense>
            },
            {
                path:"/restaurantMenu/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading Grocery page</h1>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },


        ],
        errorElement:<Error/>
    }
])
 const rooting = ReactDOM.createRoot(document.getElementById("root"));
 rooting.render(<RouterProvider router={appRouting}/>)