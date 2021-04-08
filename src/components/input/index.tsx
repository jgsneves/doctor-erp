import React from 'react';
import {InputWrapper} from './styles';

interface IPropsInput extends React.HTMLProps<HTMLInputElement> {
    inputSize: "large" | "medium";
    id: string;
}

export const Input = ({inputSize, id, type}:IPropsInput) => {
    return (
        <label htmlFor={id}>
            <InputWrapper 
                id={id} 
                inputSize={inputSize}
                type={type}    
            />
        </label>
    );
}