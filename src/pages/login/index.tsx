import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import {Wrapper} from './styles';

export const Login = () => {
    return (
        <Wrapper>
            <nav>
                <fieldset>
                    <Input inputSize="large" id="email" title="E-mail" type="email"/>
                    <Input inputSize="large" id="password" title="Senha" type="password"/>
                    <div>
                        <Button theme="primary">Entrar</Button>
                        <Button theme="secondary">Cadastrar</Button>
                    </div>
                </fieldset>
            </nav>
        </Wrapper>
    );
}