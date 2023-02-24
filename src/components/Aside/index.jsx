import React from "react";
import * as S from './styles';

import { 
    MdOutlinePermIdentity,
    MdPlaylistAdd,
    MdOutlineRule,
    MdOutlineExitToApp
 } from "react-icons/md";



const Aside = () => {
    return(
        <S.Container>
            <S.MenuContainer>
                <h3>Perfil</h3>
                <S.MenuItemLink href="/meuDados"> <MdOutlinePermIdentity/> Meus dados</S.MenuItemLink>
                <h3>Aproveitamento</h3>
                <S.MenuItemLink href="/SolicitaAproveitamento"><MdPlaylistAdd/>Solicitar aproveitamento</S.MenuItemLink>
                <S.MenuItemLink href="/Status"><MdOutlineRule/>Status de solicitação</S.MenuItemLink>
                <S.MenuItemLink href="/Home"><MdOutlineExitToApp/>Sair</S.MenuItemLink>
            </S.MenuContainer>
        </S.Container>
    );
}

export default Aside;