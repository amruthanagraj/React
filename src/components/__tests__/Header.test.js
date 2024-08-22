import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Contact from "../Contact"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"

it("should render Header Login button",()=>{
    render( 
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header/>
   </Provider>
    </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"Login"});
    // const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument();
})

it("should render cart as zero items",()=>{
    render( 
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header/>
   </Provider>
    </BrowserRouter>
    )
    const cart = screen.getByText("Cart-(0 items)");
    // const cart = screen.getByText(/Cart/);
    // const loginButton = screen.getByText("Login")
    expect(cart).toBeInTheDocument();
})

it("should change from login to logout by clicking the button",()=>{
    render( 
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header/>
   </Provider>
    </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})