import React from "react";
import * as S from './styles'
import fundo from '../../assets/logo.svg'

const Login = () => {
    return(
        <S.Container>
            <S.Box>
                <h2>LOGIN</h2>
                <span>Tá a fim de solicitar suas horas complementares, né?</span>
                <S.Form>
                    <input type="text" placeholder="Matrícula"/>
                    <input type="password" placeholder="Senha"/>

                    <a href="/meuDados">Entrar</a>
                </S.Form>

                <S.NewAccess>
                    Seu primeiro acesso?
                    <a href="/cadAluno"> Cadastre aqui!</a>
                </S.NewAccess>
            </S.Box>
        </S.Container>
    );
}

export default Login;
