import styled from "styled-components";
import StyledInputWrapper from "./InputWrapper";
import StyledLabel from "./Label";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ICheckboxInputProps {
    name: string,
    label: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
}

const StyledCheckboxInput = styled.input.attrs({ type: "checkbox" })`
    /* margin: 5; */
    display: flex;
    justify-content: start;
    border-radius: 10%;
    width: 10%;
`;

const CheckboxInput = ({ name, label, required, register }: ICheckboxInputProps) => {
    return (
        <StyledInputWrapper>
            <StyledLabel>{label}</StyledLabel>
            <StyledCheckboxInput { ...register(name) } required={required} />
        </StyledInputWrapper>
    )
};

export default CheckboxInput;