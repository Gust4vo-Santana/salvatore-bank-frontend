import styled from "styled-components";
import StyledInputWrapper from "./InputWrapper";
import StyledLabel from "./Label";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ISelectInputProps {
    name: string,
    label: string,
    options: Array<{ name: string, value: string }>,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
}

const StyledSelectInput = styled.select`
    border: 0.5px solid black;
    border-radius: 5px;
    height: 2rem;

    &:focus {
        box-shadow: 0 0 5px #ffff96;
        outline: 1px solid black;
    }
`;

const SelectInput = ({ name, label, options, required, register }: ISelectInputProps) => {
    return (
        <StyledInputWrapper>
            <StyledLabel>{label}</StyledLabel>
            <StyledSelectInput { ...register(name) } required={required}>
                {options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.name}</option>
                })}
            </StyledSelectInput>
        </StyledInputWrapper>
    )
}

export default SelectInput;