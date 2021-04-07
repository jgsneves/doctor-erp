import styled from 'styled-components';

interface IProps {
    theme: "primary" | "secondary" | "danger";
}

export const ButtonWrapper = styled.button<IProps>`
    background-color: ${props => {
        if (props.theme === "primary") {
            return "#6071F7";
        } else if (props.theme === "secondary") {
            return "transparent"
        } else if (props.theme === "danger") {
            return "#ED4433";
        }
    }};
    width: fit-content;
    border-radius: 4px;
    display: flex;
    align-items: center;
    border: ${props => props.theme === "secondary" ? "2px solid #000" : "0"};
    color: ${props => props.theme === "secondary" ? "#000" : "#FFF"};
    padding: 8px 16px;
    font-style: bold;

    &:hover {
        background-color: ${props => {
            if (props.theme === "primary") {
                return "#2D56C2";
            } else if (props.theme === "secondary") {
                return "#000";
            } else if (props.theme === "danger") {
                return "#60160F";
            }
        }};
        color: #FFF;
    }
`;