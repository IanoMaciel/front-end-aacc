import React from "react";
import * as S from './styles';

//components
import MainHeader from '../MainHeader';
import Aside from '../Aside'
import Content from '../Content';


const Layout = () => {
    return(
        <S.Grid>
            <MainHeader/>
            <Aside/>
            <Content/>
        </S.Grid>
    );
}

export default Layout;