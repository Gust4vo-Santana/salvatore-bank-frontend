import styled from "styled-components";

interface IButtonProps {
    text: string,
    bgColor?: string,
    color?: string,
    type?: string
    onClick: () => void,
};

const StyledButton = styled.button.attrs<{ $bgColor?: string, $color?: string }>((props) => ({
    type: props.type,
}))`
    color: ${ (props) => props.$color || "#E0E0E0" };
    background-color: ${ (props) => props.$bgColor || "#2C2C2E" };
    border: 1px solid #B0B0B0;
    border-radius: 5px;
    padding: 5px 10px;
    height: fit-content;
    width: fit-content;

    &:hover {
        background-color: #1C1C1E;
        color: #ffff96;
        cursor: pointer;
    }
`;

const Button = ({ text, bgColor, color, onClick }: IButtonProps) => {
    return (
        <StyledButton $bgColor={bgColor}
        onClick={onClick}
        $color={color}>
            {text}   
        </StyledButton>
    );
}

export default Button;