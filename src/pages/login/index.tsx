import React, { FormEvent } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import {LoginForm, SignUpForm, Wrapper} from './styles';

export const Login = () => {
    const [stage, setStage] = React.useState(0);
    
    function loginSubmit(e: FormEvent) {
        e.preventDefault();
    }

    function signUpSubmit(e: FormEvent) {
        e.preventDefault();
    }

    function handleSignUpButtonPress() {
        console.log(stage);
        if (stage === 0) {
            setStage(1);
        } else {
            setStage(0);
        }
    }

    return (
        <Wrapper>
            {stage === 0 ? (
                <LoginForm onSubmit={loginSubmit}>
                    <p><b>E-mail</b></p>
                    <Input inputSize="large" id="email" type="email"/>
                    <p><b>Senha</b></p>
                    <Input inputSize="large" id="password" type="password"/>
                    <div>
                        <Button type="submit" theme="primary">Entrar</Button>
                        <Button theme="secondary" onClick={handleSignUpButtonPress}>Cadastrar</Button>
                    </div>
                </LoginForm>
            ) : (
                <SignUpForm onSubmit={signUpSubmit}>
                    <p><b>Nome:</b></p>
                    <Input inputSize="large" id="name" type="text"/>
                    <p><b>E-mail</b></p>
                    <Input inputSize="large" id="email" type="email" />
                    <p><b>Senha</b></p>
                    <Input inputSize="large" id="password" type="password"/>
                    <div>
                        <Button type="submit" theme="primary">Registrar</Button>
                        <Button type="reset" theme="secondary">Limpar</Button>
                    </div>
                </SignUpForm>
            )}
        </Wrapper>
    );
}