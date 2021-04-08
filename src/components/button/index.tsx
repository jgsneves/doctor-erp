import React from 'react';
import {ButtonWrapper} from './styles';


interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme: "primary" | "secondary" | "danger";
}

export const Button = ({theme, children, onClick}:IButtonProps) => {
    return (
        <ButtonWrapper 
            theme={theme}
            onClick={onClick}
        >{children}</ButtonWrapper>
    );
}