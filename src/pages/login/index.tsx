import React from 'react';
import {Wrapper} from './styles';

export const Login = () => {
    return (
        <Wrapper>
            <nav>
                <fieldset>
                    <input type="text"/>
                    <input type="password"/>
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </fieldset>
            </nav>
        </Wrapper>
    );
}