import { render, screen } from "@testing-library/react"
import TextInput from "../../../components/atoms/input/TextInput"

describe("text input unit tests", () => {
    const mockRegister = jest.fn();

    it("should render input with correct label", () => {
        const label = "test label";

        render(<TextInput name="test name" label={label} register={mockRegister} />);

        expect(screen.getByText(label)).toBeInTheDocument();
    });

    it("should render input with correct placeholder", () => {
        const placeholder = "test placeholder";
        
        render(<TextInput name="test name" label="test label" placeholder={placeholder} register={mockRegister} />);

        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    it("should call register with correct name", () => {
        const name = "test name";

        render(<TextInput name={name} label="test label" register={mockRegister} />);

        expect(mockRegister).toHaveBeenCalledWith(name);
    });
})