import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    background-image: url('https://user-images.githubusercontent.com/71051791/217574951-d11a4604-8e16-4123-ba89-b0273bd2ac39.svg');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const Box = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;

    h2 {
        font-size: 38px;
        font-weight: bold;
    }

    span {
        margin: 10px 0 30px 0;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px;

    border-radius: 20px;
    background-color: #EEEEEE;
    filter: drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25));


    input, button {
        width: 300px;
        padding: 15px;
        margin: 10px 0;
        border-radius: 15px;
    }

    button {
        margin-top: 30px;
        font-weight: bold;
        color: #fff;
        background-color: #A60CBF;

        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }
    }

`;

export const NewAccess = styled.div`
    margin-top: 30px;
    color: #fff;
    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;

        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }
    }
`;