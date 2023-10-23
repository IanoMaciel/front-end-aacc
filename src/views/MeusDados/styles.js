import styled from "styled-components";

export const Container = styled.div`
    h3 {
        font-size: 24px;
        margin-bottom: 30px;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
        width: 100%;
        margin-bottom: 14px;
        background-color: #EDEDED;
        padding: 15px;
        border-radius: 20px;
        font-size: 18px;
    }

    div {
        width: 100%; 
        display: flex;
        justify-content: space-between;

        align-items: center;
    }

    div > input {
        width: 470px;
        //box-sizing: border-box;
        margin-bottom: 14px;
    }

    button {
        width: 300px;
        padding: 15px;
        background: #00A04A;
        border-radius: 20px;
        border: none;
        margin-top: 30px;

        font-size: 18px;
        color: #fff;
        font-weight: bold;
    
        cursor: pointer;    

        &:hover {
            opacity: 0.7;
        }
    }
`;