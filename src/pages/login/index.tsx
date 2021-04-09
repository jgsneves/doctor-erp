import React, { ChangeEvent, FormEvent } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import {FiAlertTriangle} from 'react-icons/fi';
import {ErrorMessage, LoginForm, SignUpForm, Wrapper} from './styles';
import { Spinner } from '../../components/spinner';
import { useHistory } from 'react-router';

interface IFormData {
    loginEmail: string;
    loginPassword: string;
    name: string;
    signUpEmail: string;
    signUpPassword: string;
}

interface IDoctors {
    id: number;
    name: string;
    email: string;
    password: string;
}

enum EnumStage {
    "login",
    "loading",
    "signUp"
}

export const Login = () => {
    const [stage, setStage] = React.useState<EnumStage>(EnumStage.login);
    const [error, setError] = React.useState({code: 0, message: "Sem erro."});
    const [formData, setFormData] = React.useState<IFormData>({
        loginEmail: "",
        loginPassword: "",
        name: "",
        signUpEmail: "",
        signUpPassword: "",
    });

    const history = useHistory();

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value});
        console.log(formData);
    }
    
    async function loginSubmit(e: FormEvent) {
        e.preventDefault();
        setStage(EnumStage.loading);
        try {
            const response: IDoctors[] = await fetch('http://localhost:8000/doctors').then(res => res.json());
            const userIndex = response.findIndex(doc => 
                doc.email === formData.loginEmail && 
                doc.password === formData.loginPassword
            );
            if (userIndex !== -1) {
                history.push('/dashboard');
            } else {
                setError({code: 1, message: "Usuário ou senha não encontrado."});
                setStage(EnumStage.login);
            }

        } catch (error) {
            
        }
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
            {error.code === 0 ? null : (
                <ErrorMessage>
                    <FiAlertTriangle />
                    {error.message}
                </ErrorMessage>
            )}
            {stage === EnumStage.login ? (
                <LoginForm onSubmit={loginSubmit}>
                    <h1>Entrar</h1>
                    <p><b>E-mail</b></p>
                    <Input onChange={handleInputChange} inputSize="large" id="loginEmail" type="email"/>
                    <p><b>Senha</b></p>
                    <Input onChange={handleInputChange} inputSize="large" id="loginPassword" type="password"/>
                    <div>
                        <Button type="submit" theme="primary">Entrar</Button>
                        <Button theme="secondary" onClick={handleSignUpButtonPress}>Cadastrar</Button>
                    </div>
                </LoginForm>
            ) : null}

            {stage === EnumStage.signUp ? (
                <SignUpForm onSubmit={signUpSubmit}>
                    <h1>Cadastre-se</h1>
                    <p><b>Nome:</b></p>
                    <Input onChange={handleInputChange} inputSize="large" id="name" type="text"/>
                    <p><b>E-mail</b></p>
                    <Input onChange={handleInputChange} inputSize="large" id="singUpEmail" type="email" />
                    <p><b>Senha</b></p>
                    <Input onChange={handleInputChange} inputSize="large" id="singUpPassword" type="password"/>
                    <div>
                        <Button type="submit" theme="primary">Registrar</Button>
                        <Button type="reset" theme="secondary" onClick={() => setStage(EnumStage.login)}>Limpar</Button>
                    </div>
                </SignUpForm>
            ): null}

            {stage === EnumStage.loading ? (
                <div>
                    <Spinner />
                    <h1>Carregando...</h1>
                </div>
            ): null}
        </Wrapper>
    );
}