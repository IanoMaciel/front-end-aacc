import React from "react";
import * as S from './styles';

const Content = ({ children }) => {
    return(
        <S.Container>
            <S.ContainerContent>
                { children }
            </S.ContainerContent>
        </S.Container>
    );
}

export default Content;