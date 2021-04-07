import React from 'react';
import {ButtonWrapper} from './styles';


interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme: "primary" | "secondary" | "danger";
}

export const Button = ({theme, children}:IButtonProps) => {
    return (
        <ButtonWrapper theme={theme}>{children}</ButtonWrapper>
    );
}