import React from 'react';
import { Button } from '../../components/button';
import {Wrapper} from './styles';

export const Login = () => {
    return (
        <Wrapper>
            <nav>
                <fieldset>
                    <Button theme="secondary">Cadastrar</Button>
                    <h1>teste de font</h1>
                    <Button theme="primary">Entrar</Button>
                    <p>teste de fonte</p>
                    <Button theme="danger">Perigo!</Button>
                </fieldset>
            </nav>
        </Wrapper>
    );
}