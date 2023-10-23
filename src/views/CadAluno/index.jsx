import React from "react";
import * as S from './styles'

const CadAluno = () => {
    return(
        <S.Container>
            <S.Box>
                <h2>Cadastro</h2>
                <span>Faça seu cadastro para aproveitar dos serviços</span>
                <S.Form>
                    <input type="text" placeholder="Nome completo"/>
                    <input type="text" placeholder="Matrícula"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmação da senha"/>

                    <button type="button">Cadastrar</button>
                </S.Form>

                <S.NewAccess>
                    Já tem cadastro?
                    <a href="/login"> Entre aqui!</a>
                </S.NewAccess>
            </S.Box>
        </S.Container>
    );
}

export default CadAluno;
