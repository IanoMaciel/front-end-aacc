import React from "react";
import * as S from './styles';

import logo from '../../assets/logo.svg';

import { 
    MdAccountCircle
 } from "react-icons/md";

const MainHeader = () => {
    return(
        <S.Container>
            <S.Information href="#">
                <S.Logo src={logo} alt="logo"/>
                <h3>Uni+</h3>
            </S.Information>

            <S.Profile>
                <MdAccountCircle/>
                <S.UserName>Fulano de tal</S.UserName>
            </S.Profile>
        </S.Container>
    );
}

export default MainHeader;
