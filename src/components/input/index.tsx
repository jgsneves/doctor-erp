import React from 'react';
import {InputWrapper, Label} from './styles';

interface IPropsInput extends React.HTMLProps<HTMLInputElement> {
    inputSize: "large" | "medium";
    id: string;
    title?: string;
}

export const Input = ({inputSize, id, title, type}:IPropsInput) => {
    return (
        <Label htmlFor={id}>
            <p>{title}</p>
            <InputWrapper 
                id={id} 
                inputSize={inputSize}
                type={type}    
            />
        </Label>
    );
}