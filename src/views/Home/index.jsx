import React from "react";
import * as S from './styles'

import homeImage from '../../assets/fundo.svg';

// icons
import { 
    FaGraduationCap,
    FaChalkboardTeacher
} from 'react-icons/fa';

const Home = () => {
    return(
        <S.Container>
            <S.RightContent>
                <h1>Uni<small>+</small></h1>
                <h2>Que tal solicitar suas horas complementares sem dor de cabeça?</h2>
                <S.HomeImage src={homeImage} alt="Home image"/>
            </S.RightContent>
            <S.LeftContent>
                
                <h1>ENTRAR COMO</h1>

                <S.ViewButton>
                    <S.UserOption href="/login"> <FaGraduationCap/>Aluno</S.UserOption>
                    <S.UserOption href="/login"> <FaChalkboardTeacher/>Avaliador</S.UserOption>                
                </S.ViewButton>
            </S.LeftContent>
        </S.Container>
    );
}

export default Home;