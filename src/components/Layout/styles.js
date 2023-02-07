import styled from "styled-components";

/**
    Layout
    MH = Main Header
    AS = Aside 
    CT = Content
*/

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 380px auto;
    grid-template-rows: 70px;

    grid-template-areas: 
    'MH MH'
    'AS CT';

    height: 100vh;
`;