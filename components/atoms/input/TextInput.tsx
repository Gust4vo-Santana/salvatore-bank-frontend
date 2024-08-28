import styled from "styled-components";
import StyledInputWrapper from "./InputWrapper";
import StyledLabel from "./Label";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ITextInputProps {
    name: string,
    label: string,
    required?: boolean,
    placeholder?: string,
    defaultValue?: string,
    register: UseFormRegister<FieldValues>,
}

const StyledTextInput = styled.input.attrs((props) => ({
    type: "text",
    required: props.required || false,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
}))`
    border: 0.5px solid black;
    border-radius: 5px;
    height: 2rem;

    &:focus {
        box-shadow: 0 0 5px #ffff96;
        outline: 1px solid black;
    }
`;

const TextInput = ({ name, label, required, placeholder, defaultValue, register }: ITextInputProps) => {

    return (
        <>
            <StyledInputWrapper>
                <StyledLabel>{label}</StyledLabel>
                <StyledTextInput { ...register(name) } required={required} 
                placeholder={placeholder} defaultValue={defaultValue} />
            </StyledInputWrapper>
        </>
    )
}

export default TextInput;