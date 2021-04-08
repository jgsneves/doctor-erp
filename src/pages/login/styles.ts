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