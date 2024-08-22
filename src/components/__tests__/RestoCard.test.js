import RestoCard from "../RestoCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import {render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"


it("should render the name in the restoCard from props data",()=>{
    render(<RestoCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Chinese Wok")
    expect(name).toBeInTheDocument();
})