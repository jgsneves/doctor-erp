import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import {Main} from './styles';

export const Dashboard = () => {
    return (
        <Main>
            <nav>
                <p><b>E-mail</b></p>
                <Input title="E-mail" inputSize="large" id="email" type="email"/>
                <p><b>Senha</b></p>
                <Input title="Senha" inputSize="large" id="password" type="password"/>
                <div>
                    <Button theme="primary">Entrar</Button>
                    <Button theme="secondary">Cadastrar</Button>
                </div>
            </nav>
        </Main>
    );
}