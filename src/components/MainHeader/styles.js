import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;

    background-color: #137741;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Information = styled.a`
    display: flex;
    align-items: center;

    text-decoration: none;

    h3 {
        color: #fff;
        font-size: 24px;
    }
`;

export const Logo = styled.img`
    margin-right: 10px;
    font-size: 40px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > svg {
        margin-right: 7px;
        color: #fff;
        font-size: 35px;
    }
`;

export const UserName = styled.span`
    color: #fff;
    font-size: 20px;
`;




