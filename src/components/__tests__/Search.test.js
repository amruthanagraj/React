import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from "../mocks/restaurantListData.json"
import { fireEvent, render,screen ,waitFor} from "@testing-library/react"
import Body from "../Body"
import { act } from "react"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
            
    })
})

it("should render search feature",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        ))

        const searchBtn = screen.getByRole("button",{name:"Search"});
        // console.log(searchBtn)
        expect(searchBtn).toBeInTheDocument();
})


it("should shows cards before and after filtering from search box",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        ))
        const cardsBeforeClick = screen.getAllByTestId("resCard")
        expect (cardsBeforeClick.length).toBe(8)
        
        const searchBtn = screen.getByRole("button",{name:"Search"});
        const searchInput = screen.getByTestId("searchValue")
        fireEvent.change(searchInput,{target: {value:"burger"}})
        fireEvent.click(searchBtn)
        const cardsAfterClick = screen.getAllByTestId("resCard")
        expect(cardsAfterClick.length).toBe(1);
})

it("should render top rated restaurants",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        ))
        const cardsBeforeClick = screen.getAllByTestId("resCard")
        expect(cardsBeforeClick.length).toBe(8)
        const topRatedRes = screen.getByRole("button",{name:"Top Rated Restaurants"})
        fireEvent.click(topRatedRes)
        const cardsAfterClick = screen.getAllByTestId("resCard")
        console.log("cards of top rated",cardsAfterClick)
        expect(cardsAfterClick.length).toBe(6);
       
})