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
    color: ${ (props) => props.$color || "#e0e0e0" };
    background-color: ${ (props) => props.$bgColor || "#2c2c2e" };
    border: 1px solid #B0B0B0;
    border-radius: 5px;
    padding: 5px 10px;
    height: fit-content;
    width: fit-content;

    &:hover {
        background-color: #1c1c1e;
        color: rgb(255, 255, 150);
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