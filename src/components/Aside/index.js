import React from "react";
import * as S from './styles';

import IconSolicita from '../../assets/solicitaMenu.svg'


import { 
    MdOutlinePermIdentity,
    MdPlaylistAdd,
    MdOutlineRule
 } from "react-icons/md";



const Aside = () => {
    return(
        <S.Container>
            <S.MenuContainer>
                <h3>Perfil</h3>
                <S.MenuItemLink href="#"> <MdOutlinePermIdentity/> Meus dados</S.MenuItemLink>
                <h3>Aproveitamento</h3>
                <S.MenuItemLink href="#"><MdPlaylistAdd/>Solicitação</S.MenuItemLink>
                <S.MenuItemLink href="#"><MdOutlineRule/>Status de solicitação</S.MenuItemLink>
            </S.MenuContainer>
        </S.Container>
    );
}

export default Aside;