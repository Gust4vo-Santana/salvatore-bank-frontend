import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../components/atoms/button/Button";

describe("button component unit tests", () => {

    it("should render button with correct text", () => {
        const handleClick = jest.fn();
        const text = "Button";
        render(<Button text={text} onClick={handleClick} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it("should render button with passed bgColor prop", () => {
        const handleClick = jest.fn();
        const bgColor = "#7fff5f";
        render(<Button text="Button" bgColor={bgColor} onClick={handleClick} />);
        expect(screen.getByText("Button")).toHaveStyleRule("background-color", bgColor);
    });

    it("should render button with passed color prop", () => {
        const handleClick = jest.fn();
        const color = "#004f1f";

        render(<Button text="Button" color={color} onClick={handleClick} />);
        expect(screen.getByText("Button")).toHaveStyleRule("color", color);
    });

    it("should call handleClick function when button is clicked", () => {
        const handleClick = jest.fn();
        render(<Button text="Button" onClick={handleClick} />)

        const button = screen.getByText("Button");

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalled();
    })
});