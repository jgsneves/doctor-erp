import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    & > nav {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 25px 45px 25px 45px 40px;
    }

    & > nav > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;