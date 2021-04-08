import styled from 'styled-components';
import loginCover from '../../assets/login-cover.jpg';

export const Wrapper = styled.main`
    background-image: url(${loginCover});
    background-size: cover;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LoginForm = styled.form`
    background-color: #FFF;
    padding: 16px 32px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 25px 45px 25px 45px 50px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const SignUpForm = styled.form`
    background-color: #FFF;
    padding: 16px 32px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 25px 45px 25px 45px 25px 45px 50px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const ErrorMessage = styled.p`
    background-color: #F5EDEB;
    border-style: solid;
    border-color: #E44131;
    border-width: 1px 1px 1px 7px;
    border-radius: 3px;
    height: 50px;
    color: #ED4433;
    padding: 16px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 500px;
    
    & > svg {
        margin-right: 5px;
    }
`;