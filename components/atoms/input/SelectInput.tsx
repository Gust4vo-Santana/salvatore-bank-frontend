import styled from "styled-components";
import StyledInputWrapper from "./InputWrapper";
import StyledLabel from "./Label";

interface ISelectInputProps {
    label: string,
    options: Array<{ name: string, value: string }>,
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

const SelectInput = ({ label, options }: ISelectInputProps) => {
    return (
        <StyledInputWrapper>
            <StyledLabel>{label}</StyledLabel>
            <StyledSelectInput>
                {options.map((option) => {
                    return <option value={option.value}>{option.name}</option>
                })}
            </StyledSelectInput>
        </StyledInputWrapper>
    )
}

export default SelectInput;