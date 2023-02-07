import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background-color: #EBEBEB;

    padding-left: 20px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    h3 {
        font-size: 24px;
        color: #000;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;

    color: #fff;
    font-size: 20px;
    text-decoration: none;

    
    background-color: #137741;
    padding: 10px;
    border-radius: 10px;
    width: 95%;


    margin: 10px 0;

    transition: opacity .3s;

    &:hover {
        opacity: .5;
    }

    > svg {
        margin-right: 15px;
        font-size: 35px;
        color: #fff;
    }
`;