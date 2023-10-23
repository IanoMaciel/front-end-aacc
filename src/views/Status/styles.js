import styled from "styled-components";

export const Container = styled.div`
    h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }
`;


export const StatusBar = styled.div`
    width: 100%;
    height: 119px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;

    background-color: #A60CBF;
    border-radius: 20px;

    span {
        font-size: 28px;
        font-weight: 500;
        color: #fff
    }
`;

export const List = styled.div`
    margin-top: 30px;
    border-top: 1px solid #d4d4d4;
    padding-top: 10px;
`;

export const TableDescripiton = styled.div`
    display: flex;
    justify-content: space-between;

    * {
        font-size: 20px;
        font-weight: 500;
    }

    div > span {
        margin-left: 50px;
    }
`;


