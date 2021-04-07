import styled from 'styled-components';
import loginCover from '../../assets/login-cover.jpg';

export const Wrapper = styled.main`
    background-image: url(${loginCover});
    background-size: cover;
    width: 100vw;
    height: 100vh;

    & > nav {
        background-color: #FFF;
        height: 100vh;
        width: 20%;
        position: fixed;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & > nav > fieldset {
        display: flex;
        flex-direction: column;
    }
`;