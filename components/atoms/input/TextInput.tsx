import styled from "styled-components";

interface ITextInputProps {
    label: string,
    required?: boolean,
    placeholder?: string,
    defaultValue?: string,
}

const TextInput = styled.input.attrs<ITextInputProps>((props) => ({
    type: "text",
    label: props.label,
    required: props.required || false,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
}))`
    border: 0.5px solid black;
    border-radius: 5px;
    height: 2rem;
    width: 1/3;

    &:focus {
        box-shadow: 0 0 5px #ffff96;
        outline: 1px solid black;
    }
`;

export default TextInput;