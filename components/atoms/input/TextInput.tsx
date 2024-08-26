import styled from "styled-components";
import StyledInputWrapper from "./InputWrapper";
import StyledLabel from "./Label";

interface ITextInputProps {
    label: string,
    required?: boolean,
    placeholder?: string,
    defaultValue?: string,
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

const TextInput = ({ label, required, placeholder, defaultValue }: ITextInputProps) => {
    return (
        <>
            <StyledInputWrapper>
                <StyledLabel>{label}</StyledLabel>
                <StyledTextInput required={required} placeholder={placeholder} defaultValue={defaultValue} />
            </StyledInputWrapper>
        </>
    )
}

export default TextInput;