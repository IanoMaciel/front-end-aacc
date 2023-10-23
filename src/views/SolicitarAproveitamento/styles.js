import styled from "styled-components";

export const Container = styled.div`
    h1 {
        font-size: 24px;
        margin-bottom: 30px;
    }
`;


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div {
        width: 100%; 
        display: flex;
        justify-content: space-between;
    }

    div>select {
        width: 450px;
    }

    select, a, textarea {
        width: 100%;
        margin: 14px 0;
        background-color: #EDEDED;
        padding: 15px;
        border-radius: 20px;
        font-size: 18px;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #FFF;
        background-color: #A60CBF;

        > svg {
            margin-right: 7px;
        }

    }

    textarea {
        color: #000;
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


