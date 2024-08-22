import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import  "@testing-library/jest-dom"

test("whether heading is loaded on the page or not",()=>{
render(<Contact/>)
const heading = screen.getByRole("heading")
expect(heading).toBeInTheDocument();
})

test("should load a button",()=>{
    render(<Contact/>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
    })

    test("should display name placeholder",()=>{
        render(<Contact/>)
        const inputName = screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument();
        })

        test("display 2 inputs",()=>{
            render(<Contact/>)
            const inputNames = screen.getAllByRole("textbox")
            expect(inputNames.length).toBe(2);
            })