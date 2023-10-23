import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 55px;

    background-color: #EDEDED;
    border-radius: 10px;

    margin: 15px 0px;

    padding: 0 20px;

    * {
        font-size: 20px;
    }

    div > span {
        margin-left: 50px;
    }
`;