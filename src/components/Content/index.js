import React from "react";
import * as S from './styles';

const Content = ({ children }) => {
    return(
        <S.Container>
            { children }
        </S.Container>
    );
}

export default Content;