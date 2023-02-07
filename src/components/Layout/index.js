import React,{children} from "react";
import * as S from './styles';

//components
import MainHeader from '../MainHeader';
import Aside from '../Aside'
import Content from '../Content';


const Layout = ({ children }) => {
    return(
        <S.Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                { children }
            </Content>
        </S.Grid>
    );
}

export default Layout;