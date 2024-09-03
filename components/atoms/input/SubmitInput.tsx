import styled from "styled-components";
import StyledInputWrapper from "./InputWrapper";

const StyledSubmitInput = styled.input.attrs({ type: "submit" })`
    width: 33%;
    color: #2C2C2E;
    background-color: #E0E0E0;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
`;

const SubmitInput = () => {
    return (
        <StyledInputWrapper>
            <StyledSubmitInput />
        </StyledInputWrapper>
    )
}

export default SubmitInput;