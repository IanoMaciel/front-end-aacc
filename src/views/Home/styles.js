import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-image: url('https://user-images.githubusercontent.com/71051791/217574951-d11a4604-8e16-4123-ba89-b0273bd2ac39.svg');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const RightContent = styled.div`
    width: 500px;
    margin-left: 200px;

    h1 {
        color: #A60CBF;
        font-size: 64px;
        font-weight: bold;
    }
    small { 
        color: #00A04A;
        font-size: 40px;
    }

    h2 {
        font-weight: 500;
        position: relative;
        top: 20px;
    }
`;
export const HomeImage = styled.img`
    width: 450px;
`;
export const LeftContent = styled.div`
    margin-right: 200px;
    h1 {    
        font-size: 48px;
        font-weight: bold;
        margin: 20px 100px;
    }
`;

export const ViewButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const UserOption = styled.a`
    width: 250px;
    height: 250px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #137741;
    border-radius: 20px;
    margin: 0 10px;

    background-color: #FFF;
    font-size: 28px;
    font-weight: bold;

    flex-direction: column;

    text-decoration: none;
    color: #137741;

    transition: opacity .3s;

    &:hover {
        color: #A60CBF;
        border: 3px solid #A60CBF
    }


    > svg {
        font-size: 80px;
    }


`;